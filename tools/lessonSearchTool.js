const fs = require("fs");
const path = require("path");

const STOPWORDS = new Set([
  "a", "ai", "anh", "ban", "bang", "bi", "bai", "boi", "buoi", "cac", "cai", "can", "cau", "cho",
  "co", "con", "cua", "cung", "da", "dang", "day", "de", "den", "di", "do", "duoc", "em", "gi",
  "giai", "hoi", "hoc", "khong", "kien", "la", "lai", "lam", "len", "luc", "ma", "minh", "mot",
  "nao", "nay", "nen", "neu", "noi", "o", "phan", "qua", "ra", "rang", "slide", "su", "tai",
  "the", "thi", "thich", "thuc", "toi", "trong", "tu", "va", "ve", "vi", "voi", "vua",
]);

const TRANSCRIPTS = [
  { day: 1, dayCode: "Day01", title: "Day01 transcript", file: "transcript-01-clean.md" },
  { day: 2, dayCode: "Day02", title: "Day02 transcript", file: "transcript-02-clean.md" },
  { day: 3, dayCode: "Day03", title: "Day03 transcript", file: "transcript-03-clean.md" },
  { day: 4, dayCode: "Day04", title: "Day04 transcript", file: "transcript-04-clean.md" },
  { day: 5, dayCode: "Day05", title: "Day05 transcript", file: "transcript-05-clean.md" },
  { day: 6, dayCode: "Day06", title: "Day06 transcript", file: "transcript-06-clean.md" },
];

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(value) {
  return normalize(value)
    .split(" ")
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

function cleanMarkdown(value) {
  return String(value || "")
    .replace(/^#+\s.*$/gm, "")
    .replace(/\*\*/g, "")
    .replace(/\[[^\]]*không nghe rõ[^\]]*\]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function inferRequestedDay(question) {
  const normalized = normalize(question);
  const direct = normalized.match(/\b(?:day|buoi|bai|slide|t)\s*-?0?([1-6])\b/);
  if (direct) return Number(direct[1]);

  const compact = normalized.match(/\bday0?([1-6])\b/);
  return compact ? Number(compact[1]) : null;
}

function isLessonQuestion(question, requestedDay) {
  const normalized = normalize(question);
  return (
    Boolean(requestedDay) ||
    /\b(day|buoi|bai|slide|trang|tai lieu|transcript|nguon|hoc lieu|bai hoc|khoa hoc|giang|citation)\b/.test(normalized)
  );
}

function isDeckSummaryQuestion(question) {
  return /\b(tom tat|tong ket|tong quan|overview|recap|noi dung chinh|y chinh|day nay noi gi|buoi nay noi gi)\b/.test(
    normalize(question)
  );
}

function buildTermFrequency(tokens) {
  const termFrequency = new Map();
  tokens.forEach((token) => termFrequency.set(token, (termFrequency.get(token) || 0) + 1));
  return termFrequency;
}

function hydrateChunk(chunk) {
  const tokens = tokenize(`${chunk.title || ""} ${chunk.text || ""}`);
  return {
    ...chunk,
    tokens,
    termFrequency: buildTermFrequency(tokens),
    length: Math.max(tokens.length, 1),
  };
}

function parseTranscript(markdown, transcript) {
  const chunks = [];
  const regex = /\*\*\[(T\d{2}-\d{3})\]\*\*\s*([\s\S]*?)(?=\*\*\[T\d{2}-\d{3}\]\*\*|$)/g;
  let match;

  while ((match = regex.exec(markdown)) !== null) {
    const citation = match[1];
    const text = cleanMarkdown(match[2]);
    if (text.length < 40) continue;

    chunks.push(
      hydrateChunk({
        type: "transcript",
        id: `${transcript.dayCode}-${citation}`,
        day: transcript.day,
        dayCode: transcript.dayCode,
        title: transcript.title,
        citation,
        text,
        page: null,
      })
    );
  }

  return chunks;
}

function loadKnowledgeBase(rootDir) {
  const slideIndexPath = path.join(rootDir, "data", "vlearn-pack", "slides", "slide-index.json");
  const transcriptDir = path.join(rootDir, "data", "vlearn-pack", "transcript");
  const chunks = [];

  if (fs.existsSync(slideIndexPath)) {
    const slidePages = JSON.parse(fs.readFileSync(slideIndexPath, "utf8"));
    slidePages.forEach((page) => {
      chunks.push(
        hydrateChunk({
          type: "slide",
          id: `${page.dayCode || `Day${String(page.day).padStart(2, "0")}-S${String(page.page).padStart(3, "0")}`}`,
          day: page.day,
          dayCode: page.dayCode || `Day${String(page.day).padStart(2, "0")}`,
          title: page.title || `Trang ${page.page}`,
          citation: `S${String(page.page).padStart(3, "0")}`,
          text: page.text || "",
          page: page.page,
        })
      );
    });
  }

  TRANSCRIPTS.forEach((transcript) => {
    const filePath = path.join(transcriptDir, transcript.file);
    if (!fs.existsSync(filePath)) return;
    chunks.push(...parseTranscript(fs.readFileSync(filePath, "utf8"), transcript));
  });

  return chunks;
}

function scoreChunk(chunk, queryTokens, requestedDay) {
  let score = 0;
  queryTokens.forEach((token) => {
    const tf = chunk.termFrequency.get(token) || 0;
    if (tf > 0) score += 1 + Math.log(tf + 1);
    if (chunk.title && normalize(chunk.title).includes(token)) score += 0.9;
  });

  if (requestedDay && chunk.day === requestedDay) score += 1.2;
  if (chunk.type === "slide") score += 0.15;
  return score / Math.sqrt(chunk.length);
}

function lessonSearchTool(rootDir, question, options = {}) {
  const currentDay = Number(options.currentDay || 2);
  const requestedDay = inferRequestedDay(question);
  const summaryDay = isDeckSummaryQuestion(question) ? requestedDay || currentDay : null;
  const limit = Number(options.limit || 5);
  const allChunks = loadKnowledgeBase(rootDir);
  const accessible = allChunks.filter((chunk) => chunk.day <= currentDay);

  if (requestedDay && requestedDay > currentDay) {
    return {
      tool: "lesson_search_tool",
      lessonMode: true,
      blocked: true,
      reason: `${requestedDay} is outside current unlocked range.`,
      requestedDay,
      queryTokens: tokenize(question),
      sources: [],
    };
  }

  if (summaryDay) {
    return {
      tool: "lesson_search_tool",
      lessonMode: true,
      blocked: false,
      requestedDay: summaryDay,
      queryTokens: tokenize(question),
      sources: accessible
        .filter((chunk) => chunk.type === "slide" && chunk.day === summaryDay)
        .sort((a, b) => a.page - b.page),
    };
  }

  const queryTokens = tokenize(question);
  const scope = requestedDay ? accessible.filter((chunk) => chunk.day === requestedDay) : accessible;
  const hits = scope
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, queryTokens, requestedDay) }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return {
    tool: "lesson_search_tool",
    lessonMode: isLessonQuestion(question, requestedDay),
    blocked: false,
    requestedDay,
    queryTokens,
    sources: hits.map((hit) => ({ ...hit.chunk, score: hit.score })),
  };
}

module.exports = {
  lessonSearchTool,
  inferRequestedDay,
  isLessonQuestion,
  isDeckSummaryQuestion,
  tokenize,
};
