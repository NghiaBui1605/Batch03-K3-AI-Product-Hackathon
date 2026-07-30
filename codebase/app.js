const MATERIALS = [
  {
    day: 1,
    code: "Day01",
    title: "Xác định bài toán kinh doanh cho AI",
    file: "../data/vlearn-pack/transcript/transcript-01-clean.md",
  },
  {
    day: 2,
    code: "Day02",
    title: "Chỉ số thành công và mức tự động hóa",
    file: "../data/vlearn-pack/transcript/transcript-02-clean.md",
  },
  {
    day: 3,
    code: "Day03",
    title: "Tự động hóa, ràng buộc và soi bài toán",
    file: "../data/vlearn-pack/transcript/transcript-03-clean.md",
  },
  {
    day: 4,
    code: "Day04",
    title: "Foundation: LLM, transformer, attention, agent",
    file: "../data/vlearn-pack/transcript/transcript-04-clean.md",
  },
  {
    day: 5,
    code: "Day05",
    title: "Bài toán, đánh giá và dữ liệu",
    file: "../data/vlearn-pack/transcript/transcript-05-clean.md",
  },
  {
    day: 6,
    code: "Day06",
    title: "Foundation: transformer và attention",
    file: "../data/vlearn-pack/transcript/transcript-06-clean.md",
  },
];

const PDF_DECKS = {
  1: {
    file: "../data/vlearn-pack/slides/d1-slide-hackathon.pdf",
    pageCount: 29,
    label: "Slide Hackathon - Day 1",
  },
  2: {
    file: "../data/vlearn-pack/slides/d2-slide-hackathon.pdf",
    pageCount: 29,
    label: "Slide Hackathon - Day 2",
  },
};

const SLIDE_INDEX_FILE = "../data/vlearn-pack/slides/slide-index.json";

const SLIDE_DECKS = {
  1: [
    {
      section: "Khám phá (Discovery)",
      title: "Đừng bắt đầu bằng AI, hãy bắt đầu bằng vấn đề (Pain)",
      points: [
        ["Người dùng", "Ai đang gặp vấn đề, trong bối cảnh nào, tần suất ra sao."],
        ["Công việc", "Họ đang cố gắng hoàn thành việc gì, kết quả nào là quan trọng."],
        ["Tác động", "Sai hoặc chậm sẽ tốn thời gian, điểm số, niềm tin, hay chi phí nào."],
      ],
      note: "Tutor có thể hỏi ngược lại nếu câu hỏi quá rộng hoặc thiếu bối cảnh.",
    },
    {
      section: "Xác định bài toán (Problem framing)",
      title: "Một lát cắt tốt có thể demo trong 5 phút",
      points: [
        ["Một người dùng", "Tập trung vào học viên đang đọc tài liệu trên VLearn."],
        ["Một quyết định AI", "Trả lời, từ chối, hay hỏi lại dựa trên nguồn đã học."],
        ["Một kết quả", "Học viên hiểu đúng kiến thức liên quan mà không mở thêm tab."],
      ],
      note: "Đây là định dạng lát cắt (slice) của bản thử nghiệm này.",
    },
    {
      section: "Bằng chứng (Evidence)",
      title: "Trích dẫn (Citation) là lớp chống bịa của Tutor",
      points: [
        ["Nguồn", "Mỗi câu trả lời cần bám vào transcript hoặc slide đã mở quyền."],
        ["Truy hồi", "Tìm đoạn liên quan trước khi sinh câu trả lời."],
        ["Kiểm tra", "Hiển thị mã [Txx-NNN] để học viên và trợ giảng kiểm lại nhanh."],
      ],
      note: "Nếu không có căn cứ, bot nói rõ là chưa đủ bằng chứng.",
    },
  ],
  2: [
    {
      section: "Chỉ số (Metrics)",
      title: "Đo đúng không chỉ là cảm giác hay",
      points: [
        ["Độ bao phủ (Coverage)", "Bao nhiêu câu hỏi tìm được nguồn trong tài liệu đã học."],
        ["Trích dẫn (Grounding)", "Bao nhiêu câu trả lời có trích dẫn chuẩn xác."],
        ["Từ chối (Refusal)", "Bao nhiêu câu hỏi ngoài phạm vi được chặn đúng lúc."],
      ],
      note: "Bản thử nghiệm nên có tập câu hỏi chuẩn (golden set) nhỏ để chạy lặp lại.",
    },
    {
      section: "Tự động hóa (Automation)",
      title: "AI nên tự động đến đâu thì vừa",
      points: [
        ["Gợi ý (Suggest)", "Gợi ý đoạn cần đọc lại khi câu hỏi mơ hồ."],
        ["Trả lời (Answer)", "Trả lời ngắn, có nguồn, trong phạm vi đã học."],
        ["Escalate", "Chuyển trợ giảng khi câu hỏi vượt nguồn hoặc liên quan chấm điểm."],
      ],
      note: "Không phải câu hỏi nào cũng nên trả lời trực tiếp.",
    },
    {
      section: "Rủi ro (Risk)",
      title: "Một câu trả lời sai có thể tạo hiểu nhầm dây chuyền",
      points: [
        ["Nguồn sự thật", "Bot chỉ đọc cơ sở kiến thức được phép."],
        ["Mơ hồ", "Nếu câu hỏi thiếu dữ kiện, bot sẽ hỏi lại."],
        ["Phạm vi", "Slide chưa học bị khóa, không thể truy nhập."],
      ],
      note: "Đây là hành vi quan trọng nhất của Tutor kiểm soát quyền tri thức.",
    },
  ],
  3: [
    {
      section: "Luồng công việc (Workflow)",
      title: "Học liệu là một dòng công việc, không phải tệp rời rạc",
      points: [
        ["Đang đọc", "Hệ thống biết học viên đang ở Day nào và slide nào."],
        ["Đã học", "Tất cả các Day trước đó trở thành ngữ cảnh hợp lệ."],
        ["Chưa học", "Tài liệu sau tiến độ hiện tại không được phép truy cập."],
      ],
      note: "Quyền truy cập đi theo tiến độ học, không đi theo ý muốn của bot.",
    },
    {
      section: "Ràng buộc (Constraints)",
      title: "Ràng buộc sản phẩm giúp AI trở nên đáng tin hơn",
      points: [
        ["Phạm vi (Scope)", "Chỉ trả lời kiến thức thuộc khóa học."],
        ["Nguồn (Source)", "Chỉ dùng transcript/slide nội bộ đã mở."],
        ["Thái độ (Tone)", "Giải thích dễ hiểu, không phân xử hay chấm điểm học viên."],
      ],
      note: "Thiết kế tốt là thiết kế đường ray chuẩn cho AI.",
    },
    {
      section: "Tình huống thử nghiệm",
      title: "Đang ở Day05 nhưng hỏi lại kiến thức Day04",
      points: [
        ["Tình huống", "Học viên đọc bài toán sản phẩm và quên khái niệm attention."],
        ["Tutor", "Tìm trong Day04 vì Day04 đã được học."],
        ["Kết quả", "Trả lời kèm [T04-xxx] để học viên quay lại đúng đoạn."],
      ],
      note: "Nút câu hỏi mẫu bên dưới slide có sẵn trường hợp này.",
    },
  ],
  4: [
    {
      section: "Nền tảng (Foundation)",
      title: "LLM dự đoán token tiếp theo dựa trên ngữ cảnh",
      points: [
        ["Token", "Văn bản được chia thành các đơn vị nhỏ để mô hình xử lý."],
        ["Ngữ cảnh (Context)", "Câu hỏi và tài liệu được đưa vào làm ngữ cảnh."],
        ["Đầu ra (Output)", "Mô hình tạo câu trả lời theo xác suất, nên cần grounding."],
      ],
      note: "Nếu không có nguồn, LLM vẫn có thể nói nghe hợp lý nhưng sai.",
    },
    {
      section: "Cơ chế Attention",
      title: "Attention giúp mô hình tập trung vào phần liên quan",
      points: [
        ["Liên kết", "Các token xem token nào quan trọng trong bối cảnh hiện tại."],
        ["Trọng số", "Thông tin liên quan được ưu tiên hơn thông tin nhiễu."],
        ["Ứng dụng", "Khi hỏi về một khái niệm, tutor cần tìm đoạn nguồn gần nhất."],
      ],
      note: "Đây là lý do truy hồi (retrieval) + trích dẫn hợp với chatbot học liệu.",
    },
    {
      section: "Tác tử (Agent)",
      title: "Agent là mô hình có thể dùng công cụ theo mục tiêu",
      points: [
        ["Quan sát (Observe)", "Đọc câu hỏi và trạng thái học tập."],
        ["Truy hồi (Retrieve)", "Tìm đoạn trong thư viện đã được phép."],
        ["Phản hồi (Respond)", "Trả lời, từ chối, hoặc hỏi lại có lý do."],
      ],
      note: "Bản thử nghiệm này mô phỏng agent bằng retrieval local trong trình duyệt.",
    },
  ],
  5: [
    {
      section: "Tư duy sản phẩm (Product thinking)",
      title: "Chọn đúng bài toán quan trọng hơn làm thật nhiều",
      points: [
        ["Đối tượng (Who)", "Học viên đang đọc tài liệu trong buổi học."],
        ["Vấn đề (Pain)", "Muốn hỏi kiến thức cũ nhưng tutor chỉ nhìn slide hiện tại."],
        ["Tác động (Impact)", "Học bị đứt mạch, phải tự đi tìm lại file cũ."],
      ],
      note: "Đây là lát cắt VLearn AI tutor của nhóm.",
    },
    {
      section: "Luồng công việc (Workflow)",
      title: "Workflow là chuỗi bước để một kết quả xảy ra",
      points: [
        ["Mức cao", "Học viên vào khóa, đọc slide, hỏi bài, làm bài tập."],
        ["Chi tiết", "Trong lúc đọc Day05, cần hỏi lại kiến thức Day04."],
        ["Quyết định", "Bot có được truy cập Day04 không? Có, vì đã học."],
      ],
      note: "Thử hỏi: 'Ở Day05, workflow được hiểu như thế nào?'",
    },
    {
      section: "Đánh giá (Evaluation)",
      title: "Cần đo được bot đã trả lời đúng nguồn hay chưa",
      points: [
        ["Golden set", "Tập câu hỏi: hỏi Day04 khi ở Day05, hỏi Day06 khi ở Day05."],
        ["Đạt (Pass)", "Trả lời đúng nguồn cũ, chặn nguồn chưa học."],
        ["Thất bại (Fail)", "Tự bịa, dùng trích dẫn sai, hoặc mở khóa slide sau."],
      ],
      note: "Đây là tiêu chí demo rõ nhất cho ban giám khảo.",
    },
  ],
  6: [
    {
      section: "Phân tích sâu (Deep dive)",
      title: "Transformer xử lý quan hệ giữa các token",
      points: [
        ["Chuỗi (Sequence)", "Văn bản là chuỗi token có thứ tự."],
        ["Attention", "Mỗi token tính mức độ liên quan với token khác."],
        ["Lớp (Layers)", "Nhiều lớp biến đổi giúp mô hình học biểu diễn sâu hơn."],
      ],
      note: "Day06 bị khóa nếu học viên mới ở Day05.",
    },
    {
      section: "Cửa sổ ngữ cảnh (Context window)",
      title: "Không phải đưa cả khóa học vào prompt là xong",
      points: [
        ["Nhiều tài liệu", "Cần tìm đúng đoạn trước khi gọi AI."],
        ["Nhiều quyền", "Cần biết tài liệu nào được phép mở."],
        ["Nhiều rủi ro", "Cần từ chối nếu nguồn chưa học hoặc ngoài phạm vi."],
      ],
      note: "Thư viện kiến thức là lớp điều phối trước khi bot trả lời.",
    },
    {
      section: "Triển khai thực tế (Production)",
      title: "Bản thật nên tách ingestion, retrieval và answer policy",
      points: [
        ["Ingestion", "Nhập slide, tách chunk, gắn metadata Day/section/page."],
        ["Retrieval", "Lấy top-k chunk trong phạm vi được phép."],
        ["Policy", "Quyết định trả lời, hỏi lại, hay từ chối."],
      ],
      note: "Bản thử nghiệm này gồm cả ba phần trong app.js để demo nhanh.",
    },
  ],
};

const STOPWORDS = new Set([
  "a", "ai", "anh", "ban", "bang", "bi", "bai", "boi", "buoi", "cac", "cai", "can", "cau", "cho",
  "co", "con", "cua", "cung", "da", "dang", "day", "de", "den", "di", "do", "duoc", "em", "gi",
  "giai", "hoi", "hoc", "khong", "kien", "la", "lai", "lam", "len", "luc", "ma", "minh", "mot",
  "nao", "nay", "nen", "neu", "noi", "o", "phan", "qua", "ra", "rang", "slide", "su", "tai",
  "the", "thi", "thich", "thuc", "toi", "trong", "tu", "va", "ve", "vi", "voi", "vua",
]);

function getSavedApiConfig() {
  try {
    const saved = localStorage.getItem("vlearn_api_config");
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return {
    provider: "openai",
    apiKey: "",
    model: "gpt-4o-mini",
    baseUrl: "https://api.openai.com/v1",
  };
}

function saveApiConfig(config) {
  state.apiConfig = config;
  try {
    localStorage.setItem("vlearn_api_config", JSON.stringify(config));
  } catch (e) {}
}

const state = {
  currentDay: 2,
  currentSlideIndex: 0,
  activeCitation: null,
  chatOpen: true,
  chunks: [],
  slidePages: [],
  idf: new Map(),
  ready: false,
  apiConfig: getSavedApiConfig(),
};

const els = {
  body: document.body,
  currentDayLabel: document.querySelector("#current-day-label"),
  daySelector: document.querySelector("#day-selector"),
  libraryList: document.querySelector("#library-list"),
  libraryCount: document.querySelector("#library-count"),
  accessSummary: document.querySelector("#access-summary"),
  deckTitle: document.querySelector("#deck-title"),
  slideCount: document.querySelector("#slide-count"),
  slideList: document.querySelector("#slide-list"),
  slideKicker: document.querySelector("#slide-kicker"),
  slideProgress: document.querySelector("#slide-progress"),
  slideSection: document.querySelector("#slide-section"),
  slideTitle: document.querySelector("#slide-title"),
  slideBody: document.querySelector("#slide-body"),
  slideNote: document.querySelector("#slide-note"),
  demoSlide: document.querySelector("#demo-slide"),
  pdfSlide: document.querySelector("#pdf-slide"),
  prevSlide: document.querySelector("#prev-slide"),
  nextSlide: document.querySelector("#next-slide"),
  chatToggle: document.querySelector("#chat-toggle"),
  chatClose: document.querySelector("#chat-close"),
  chatStream: document.querySelector("#chat-stream"),
  form: document.querySelector("#chat-form"),
  input: document.querySelector("#question-input"),
  sourcePanel: document.querySelector("#source-panel"),
  sourceCount: document.querySelector("#source-count"),
  librarySearch: document.querySelector("#library-search"),
  searchResults: document.querySelector("#search-results"),

  // Modal API Elements
  apiSettingsToggle: document.querySelector("#api-settings-toggle"),
  apiModal: document.querySelector("#api-modal"),
  apiModalClose: document.querySelector("#api-modal-close"),
  apiForm: document.querySelector("#api-form"),
  apiProvider: document.querySelector("#api-provider"),
  apiKeyInput: document.querySelector("#api-key"),
  apiModelInput: document.querySelector("#api-model"),
  apiBaseUrlInput: document.querySelector("#api-base-url"),
  customUrlGroup: document.querySelector("#custom-url-group"),
  apiStatusMsg: document.querySelector("#api-status-msg"),
  apiClearBtn: document.querySelector("#api-clear-btn"),
};

function normalize(value) {
  return value
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
  return value
    .replace(/^#+\s.*$/gm, "")
    .replace(/\*\*/g, "")
    .replace(/\[[^\]]*không nghe rõ[^\]]*\]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseTranscript(markdown, material) {
  const chunks = [];
  const pdfDeck = PDF_DECKS[material.day];
  const matches = [...markdown.matchAll(/\*\*\[(T\d{2}-\d{3})\]\*\*\s*([\s\S]*?)(?=\*\*\[T\d{2}-\d{3}\]\*\*|$)/g)];
  const usableMatches = matches.filter((match) => cleanMarkdown(match[2]).length >= 40);
  const totalUsable = Math.max(usableMatches.length, 1);
  const regex = /\*\*\[(T\d{2}-\d{3})\]\*\*\s*([\s\S]*?)(?=\*\*\[T\d{2}-\d{3}\]\*\*|$)/g;
  let match;
  let usableIndex = 0;

  while ((match = regex.exec(markdown)) !== null) {
    const citation = match[1];
    const text = cleanMarkdown(match[2]);
    if (text.length < 40) continue;
    usableIndex += 1;

    const tokens = tokenize(`${material.title} ${text}`);
    const termFrequency = new Map();
    tokens.forEach((token) => termFrequency.set(token, (termFrequency.get(token) || 0) + 1));
    const page = pdfDeck
      ? Math.min(pdfDeck.pageCount, Math.max(1, Math.ceil((usableIndex / totalUsable) * pdfDeck.pageCount)))
      : null;

    chunks.push({
      id: `${material.code}-${citation}`,
      day: material.day,
      dayCode: material.code,
      title: material.title,
      citation,
      text,
      page,
      normText: normalize(text),
      tokens,
      termFrequency,
      length: Math.max(tokens.length, 1),
    });
  }

  return chunks;
}

async function tryFetchMaterial(material) {
  const basename = material.file.split("/").pop();
  const candidates = [
    material.file,
    `./transcript/${basename}`,
    `./${basename}`,
    material.file.replace(/^\.\.\//, "/"),
  ];

  for (const path of candidates) {
    try {
      const response = await fetch(path);
      if (response.ok) {
        material._resolvedFile = path;
        return response;
      }
    } catch (error) {
      // Try the next path so the app also works below a hosting sub-path.
    }
  }

  throw new Error(`Không nạp được ${material.file}`);
}

function parseSlideIndex(items = []) {
  return items
    .filter((item) => item.day && item.page && item.text)
    .map((item) => {
      const material = MATERIALS.find((entry) => entry.day === item.day);
      const text = String(item.text);
      const tokens = tokenize(`${material?.title || ""} ${item.title || ""} ${text}`);
      const termFrequency = new Map();
      tokens.forEach((token) => termFrequency.set(token, (termFrequency.get(token) || 0) + 1));

      return {
        id: `${item.dayCode || formatDay(item.day)}-S${String(item.page).padStart(3, "0")}`,
        type: "slide",
        day: item.day,
        dayCode: item.dayCode || formatDay(item.day),
        title: item.title || `${item.dayCode || formatDay(item.day)} - Trang ${item.page}`,
        citation: `S${String(item.page).padStart(3, "0")}`,
        text,
        page: item.page,
        normText: normalize(text),
        tokens,
        termFrequency,
        length: Math.max(tokens.length, 1),
      };
    });
}

async function tryFetchSlideIndex() {
  const candidates = [
    SLIDE_INDEX_FILE,
    "./slides/slide-index.json",
    SLIDE_INDEX_FILE.replace(/^\.\.\//, "/"),
  ];

  for (const path of candidates) {
    try {
      const response = await fetch(path);
      if (response.ok) return parseSlideIndex(await response.json());
    } catch (error) {
      // Slide search can still fall back to transcript chunks when this file is absent.
    }
  }

  return [];
}

async function loadKnowledgeBase() {
  const [loaded, slidePages] = await Promise.all([
    Promise.all(
      MATERIALS.map(async (material) => {
        const response = await tryFetchMaterial(material);
        return parseTranscript(await response.text(), material);
      })
    ),
    tryFetchSlideIndex(),
  ]);

  state.chunks = loaded.flat();
  state.slidePages = slidePages;
  buildIdf();
  state.ready = true;
}

function buildIdf() {
  const docFrequency = new Map();
  const documents = searchableDocuments();
  documents.forEach((document) => {
    new Set(document.tokens).forEach((token) => docFrequency.set(token, (docFrequency.get(token) || 0) + 1));
  });

  state.idf = new Map(
    [...docFrequency.entries()].map(([token, count]) => [
      token,
      Math.log((documents.length + 1) / (count + 0.5)) + 1,
    ])
  );
}

function inferRequestedDay(question) {
  const normalized = normalize(question);
  const direct = normalized.match(/\b(?:day|buoi|bai|slide|t)\s*-?0?([1-6])\b/);
  if (direct) return Number(direct[1]);

  const compact = normalized.match(/\bday0?([1-6])\b/);
  return compact ? Number(compact[1]) : null;
}

function searchableDocuments() {
  return [...state.chunks, ...state.slidePages];
}

function accessibleChunks() {
  return searchableDocuments().filter((chunk) => chunk.day <= state.currentDay);
}

function scoreChunk(chunk, queryTokens, requestedDay) {
  let score = 0;
  queryTokens.forEach((token) => {
    const tf = chunk.termFrequency.get(token) || 0;
    if (tf > 0) score += (1 + Math.log(tf)) * (state.idf.get(token) || 1);
  });

  const queryPhrase = queryTokens.join(" ");
  if (queryPhrase.length > 6 && chunk.normText.includes(queryPhrase)) score += 5;
  if (chunk.type === "slide") {
    const leadingText = normalize(`${chunk.title || ""} ${chunk.text.slice(0, 180)}`);
    const leadingMatches = queryTokens.reduce((total, token) => total + (leadingText.includes(token) ? 1 : 0), 0);
    score *= 1.25 + leadingMatches * 0.45;
  }
  if (requestedDay && chunk.day === requestedDay) score *= 1.35;
  return score / Math.sqrt(chunk.length / 80);
}

function searchKnowledge(question, options = {}) {
  const requestedDay = inferRequestedDay(question);
  const queryTokens = tokenize(question);
  const scope = requestedDay
    ? accessibleChunks().filter((chunk) => chunk.day === requestedDay)
    : accessibleChunks();

  const hits = scope
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, queryTokens, requestedDay) }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, options.limit || 5);

  return { requestedDay, queryTokens, hits };
}

function isLessonQuestion(question, requestedDay, hits = []) {
  const normalized = normalize(question);
  const explicitLessonIntent = /\b(day|buoi|bai|slide|trang|tai lieu|transcript|nguon|hoc lieu|bai hoc|khoa hoc|giang|citation)\b/.test(normalized);
  if (requestedDay || explicitLessonIntent) return true;

  return false;
}

function isDeckSummaryQuestion(question) {
  const normalized = normalize(question);
  return /\b(tom tat|tong ket|tong quan|overview|recap|noi dung chinh|y chinh|day nay noi gi|buoi nay noi gi)\b/.test(normalized);
}

function slideSourcesForDay(day) {
  return state.slidePages
    .filter((page) => page.day === day)
    .sort((a, b) => a.page - b.page);
}

function bestSentence(text, queryTokens) {
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length === 0) return shorten(text, 280);

  const ranked = sentences
    .map((sentence) => {
      const normalized = normalize(sentence);
      const score = queryTokens.reduce((total, token) => total + (normalized.includes(token) ? 1 : 0), 0);
      return { sentence, score };
    })
    .sort((a, b) => b.score - a.score);

  return shorten(ranked[0]?.score ? ranked[0].sentence : text, 300);
}

function shorten(value, maxLength) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trim()}...`;
}

async function callRealAiApi(question, sources) {
  const { provider, apiKey, model, baseUrl } = state.apiConfig;
  if (!apiKey) throw new Error("Chưa nhập API Key.");

  const contextText = sources
    .map((s) => `[${s.dayCode} - ${s.citation}]: ${s.text}`)
    .join("\n\n");

  const systemPrompt = `Bạn là VLearn AI Tutor, một trợ lý học tập thông minh. Nhiệm vụ của bạn là giải thích ngắn gọn, chính xác câu hỏi của học viên dựa trên các đoạn trích kiến thức được phép dưới đây.

Quy tắc quan trọng:
1. CHỈ dùng thông tin từ các đoạn trích kiến thức được cấp. Không tự ý bịa thêm thông tin ngoài nguồn.
2. Với mỗi ý trả lời, hãy đính kèm mã trích dẫn tương ứng trong ngoặc vuông, ví dụ [T04-012].
3. Trả lời bằng Tiếng Việt tự nhiên, mạch lạc và dễ hiểu.
4. Nếu câu hỏi không thể trả lời từ các đoạn trích được cấp, hãy thông báo rằng tài liệu hiện tại chưa có đủ dữ kiện để trả lời.

CÁC ĐOẠN TRÍCH KIẾN THỨC ĐƯỢC PHÉP TRUY CẬP:
${contextText}`;

  if (provider === "gemini") {
    const targetModel = model.trim() || "gemini-1.5-flash";
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey.trim()}`;
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemPrompt}\n\nCâu hỏi của học viên: ${question}` }],
          },
        ],
      }),
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Lỗi Gemini API (${res.status})`);
    }
    const data = await res.json();
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!answer) throw new Error("Gemini API không phản hồi câu trả lời.");
    return answer;
  } else {
    // OpenAI or Custom OpenAI Compatible API
    const base = (baseUrl || "https://api.openai.com/v1").replace(/\/+$/, "");
    const url = `${base}/chat/completions`;
    const targetModel = model.trim() || "gpt-4o-mini";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey.trim()}`,
      },
      body: JSON.stringify({
        model: targetModel,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        temperature: 0.3,
      }),
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Lỗi API (${res.status})`);
    }
    const data = await res.json();
    const answer = data.choices?.[0]?.message?.content;
    if (!answer) throw new Error("API không trả về nội dung.");
    return answer;
  }
}

async function callServerAiApi(question, sources = [], lessonMode = false) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question,
      sources,
      lessonMode,
      currentDay: state.currentDay,
      currentRange: formatRange(state.currentDay),
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `Backend AI lỗi ${response.status}.`);
  }
  if (!data.answer) throw new Error("Backend AI không trả về nội dung.");
  return data;
}

async function answerQuestion(question) {
  const requestedDay = inferRequestedDay(question);
  if (requestedDay && requestedDay > state.currentDay) {
    return {
      type: "blocked",
      text: `Bạn đang ở ${formatDay(state.currentDay)}, nên Tutor chỉ được phép sử dụng tài liệu trong phạm vi ${formatRange(state.currentDay)}. ${formatDay(requestedDay)} chưa được mở quyền; hệ thống sẽ không truy cập hoặc suy đoán nội dung này.`,
      sources: [],
    };
  }

  const { hits, queryTokens } = searchKnowledge(question, { limit: 3 });
  if (queryTokens.length === 0 && question.length < 2) {
    return {
      type: "blocked",
      text: "Bạn vui lòng nhập một câu hỏi cụ thể hơn để Tutor tìm đúng đoạn kiến thức trong thư viện đã học.",
      sources: [],
    };
  }

  if (false && (hits.length === 0 || hits[0].score < 0.42)) {
    return {
      type: "blocked",
      text: `Tutor chưa tìm thấy căn cứ đủ rõ trong phạm vi ${formatRange(state.currentDay)}. Bạn có thể hỏi hẹp hơn theo khái niệm, ví dụ "attention", "workflow" hoặc "problem statement".`,
      sources: [],
    };
  }

  const lessonMode = isLessonQuestion(question, requestedDay, hits);
  const summaryDay = lessonMode && isDeckSummaryQuestion(question) ? (requestedDay || state.currentDay) : null;
  const summarySources = summaryDay ? slideSourcesForDay(summaryDay) : [];
  const hasGroundedSources = summarySources.length > 0 || (hits.length > 0 && hits[0].score >= 0.42);
  const sources = summarySources.length > 0
    ? summarySources
    : lessonMode && hasGroundedSources
      ? hits.map((hit) => hit.chunk)
      : [];

  try {
    const serverResponse = await callServerAiApi(question, [], lessonMode);
    return {
      type: "answer",
      text: serverResponse.answer,
      sources: Array.isArray(serverResponse.sources) ? serverResponse.sources : sources,
    };
  } catch (serverError) {
    console.warn("Server AI unavailable, fallbacking:", serverError);
  }

  if (!lessonMode || !hasGroundedSources) {
    return {
      type: "blocked",
      text: `Tutor chưa gọi được AI từ .env và cũng chưa tìm thấy căn cứ đủ rõ trong phạm vi ${formatRange(state.currentDay)}. Hãy chạy bằng server Node hoặc hỏi hẹp hơn theo khái niệm, ví dụ "attention", "workflow" hoặc "problem statement".`,
      sources: [],
    };
  }

  // Nếu người dùng đã cấu hình Real API Key
  if (state.apiConfig.apiKey) {
    try {
      const aiResponse = await callRealAiApi(question, sources);
      return {
        type: "answer",
        text: aiResponse,
        sources,
      };
    } catch (err) {
      console.warn("Real API Error, fallbacking to Local Engine:", err);
      const lead = requestedDay
        ? `Dựa trên ${formatDay(requestedDay)} trong thư viện đã học (Local Mode - Lỗi API: ${err.message}):`
        : `Dựa trên ${formatRange(state.currentDay)} trong thư viện đã học (Local Mode - Lỗi API: ${err.message}):`;
      const points = sources.map((source) => `- ${bestSentence(source.text, queryTokens)} [${source.citation}]`).join("\n");
      return {
        type: "answer",
        text: `${lead}\n${points}`,
        sources,
      };
    }
  }

  // Local Mode (TF-IDF synthesis)
  const lead = requestedDay
    ? `Dựa trên ${formatDay(requestedDay)} trong thư viện đã học:`
    : `Dựa trên ${formatRange(state.currentDay)} trong thư viện đã học:`;
  const points = sources.map((source) => `- ${bestSentence(source.text, queryTokens)} [${source.citation}]`).join("\n");

  return {
    type: "answer",
    text: `${lead}\n${points}`,
    sources,
  };
}

function formatDay(day) {
  return `Day${String(day).padStart(2, "0")}`;
}

function formatRange(day) {
  return `Day01-${formatDay(day)}`;
}

function currentMaterial() {
  return MATERIALS.find((material) => material.day === state.currentDay);
}

function currentSlides() {
  const pdfDeck = PDF_DECKS[state.currentDay];
  if (pdfDeck) {
    return Array.from({ length: pdfDeck.pageCount }, (_, index) => ({
      title: `Trang ${index + 1}`,
      page: index + 1,
    }));
  }
  return SLIDE_DECKS[state.currentDay] || [];
}

function currentSlide() {
  return currentSlides()[state.currentSlideIndex] || currentSlides()[0];
}

function pageFromChunk(chunk) {
  const pdfDeck = PDF_DECKS[chunk.day];
  if (!pdfDeck || !chunk.page) return null;
  return Math.min(pdfDeck.pageCount, Math.max(1, Number(chunk.page)));
}

function sourceKindLabel(source) {
  return source.type === "slide" ? "Slide" : "Transcript";
}

function buildPdfUrl(pdfDeck, page = 1) {
  const targetPage = Math.min(pdfDeck.pageCount, Math.max(1, Number(page) || 1));
  return `${pdfDeck.file}#page=${targetPage}&view=FitH&navpanes=0`;
}

function jumpToSource(chunk, options = {}) {
  const page = pageFromChunk(chunk);
  state.currentDay = chunk.day;
  state.activeCitation = chunk.citation;
  if (page) {
    state.currentSlideIndex = page - 1;
  }
  render();
  if (els.pdfSlide && page && PDF_DECKS[chunk.day]) {
    const pdfUrl = buildPdfUrl(PDF_DECKS[chunk.day], page);
    els.pdfSlide.setAttribute("src", "about:blank");
    requestAnimationFrame(() => {
      els.pdfSlide.setAttribute("src", pdfUrl);
      els.pdfSlide.setAttribute("title", PDF_DECKS[chunk.day].label);
    });
    els.pdfSlide.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (options.focusChat) {
    setChatOpen(true);
    els.input.focus();
  }
}

function setCurrentDay(day) {
  state.currentDay = day;
  state.currentSlideIndex = 0;
  state.activeCitation = null;
  render();
  addBotMessage(`Đã chuyển sang ${formatDay(day)}. Tutor hiện chỉ sử dụng ${formatRange(day)}.`, []);
}

function setChatOpen(open) {
  state.chatOpen = open;
  els.body.classList.toggle("chat-collapsed", !open);
  els.chatToggle.textContent = open ? "Ẩn chatbot" : "Hiện chatbot";
  els.chatToggle.setAttribute("aria-expanded", String(open));
}

function renderDaySelector() {
  els.daySelector.innerHTML = "";
  MATERIALS.forEach((material) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-button${material.day === state.currentDay ? " active" : ""}`;
    button.textContent = material.code;
    button.addEventListener("click", () => setCurrentDay(material.day));
    els.daySelector.appendChild(button);
  });
}

function renderSlideList() {
  if (!els.slideList) return;
  const slides = currentSlides();
  els.slideList.innerHTML = "";
  slides.forEach((slide, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `slide-thumb${index === state.currentSlideIndex ? " active" : ""}`;
    button.innerHTML = `<span>Slide ${index + 1}</span>${escapeHtml(slide.title)}`;
    button.addEventListener("click", () => {
      state.currentSlideIndex = index;
      renderSlides();
    });
    els.slideList.appendChild(button);
  });
}

function renderSlides() {
  const material = currentMaterial();
  const slides = currentSlides();
  const slide = currentSlide();
  const total = slides.length;
  const position = state.currentSlideIndex + 1;

  els.deckTitle.textContent = `${material.code} - ${material.title}`;
  if (els.slideCount) els.slideCount.textContent = `${position}/${total}`;
  if (els.slideKicker) els.slideKicker.textContent = `${material.code} - Slide ${position}`;
  if (els.slideProgress) els.slideProgress.textContent = `${position}/${total}`;

  const pdfDeck = PDF_DECKS[state.currentDay];
  els.pdfSlide.hidden = !pdfDeck;
  els.demoSlide.hidden = Boolean(pdfDeck);

  if (pdfDeck) {
    const pdfUrl = buildPdfUrl(pdfDeck, position);
    if (els.pdfSlide.getAttribute("src") !== pdfUrl) {
      els.pdfSlide.setAttribute("src", pdfUrl);
      els.pdfSlide.setAttribute("title", pdfDeck.label);
    }
  } else {
    els.slideSection.textContent = slide.section;
    els.slideTitle.textContent = slide.title;
    els.slideBody.innerHTML = slide.points
      .map(
        ([label, body]) => `
          <div class="slide-point">
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(body)}</p>
          </div>
        `
      )
      .join("");
    els.slideNote.textContent = slide.note;
  }
  if (els.prevSlide) els.prevSlide.disabled = position === 1;
  if (els.nextSlide) els.nextSlide.disabled = position === total;
  renderSlideList();
}

function renderLibrary() {
  els.libraryList.innerHTML = "";
  MATERIALS.forEach((material) => {
    const unlocked = material.day <= state.currentDay;
    const item = document.createElement("div");
    item.className = `library-item${unlocked ? "" : " locked"}`;
    item.innerHTML = `
      <span class="status-dot" aria-hidden="true"></span>
      <div>
        <div class="library-title">${material.code} - ${escapeHtml(material.title)}</div>
        <div class="library-meta">${countChunks(material.day)} đoạn có trích dẫn</div>
      </div>
      <span class="library-badge">${unlocked ? "Mở" : "Khóa"}</span>
    `;
    els.libraryList.appendChild(item);
  });

  els.libraryCount.textContent = `${Math.min(state.currentDay, MATERIALS.length)}/${MATERIALS.length}`;
}

function countChunks(day) {
  return state.chunks.filter((chunk) => chunk.day === day).length || "...";
}

function renderAccessSummary() {
  els.currentDayLabel.textContent = formatDay(state.currentDay);
  els.accessSummary.textContent = `Đang mở: ${formatRange(state.currentDay)}`;
}

function renderSources(sources = []) {
  els.sourcePanel.innerHTML = "";
  els.sourceCount.textContent = String(sources.length);

  if (sources.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Chưa có nguồn được chọn.";
    els.sourcePanel.appendChild(empty);
    return;
  }

  sources.forEach((source) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `source-card${source.citation === state.activeCitation ? " active" : ""}`;
    const pageLabel = pageFromChunk(source) ? ` - Trang ${pageFromChunk(source)}` : "";
    card.innerHTML = `
      <strong>${sourceKindLabel(source)} - ${source.dayCode} - [${source.citation}]${pageLabel}</strong>
      <p>${escapeHtml(shorten(source.text, 440))}</p>
    `;
    card.addEventListener("click", () => jumpToSource(source));
    els.sourcePanel.appendChild(card);
  });
}

function addMessage(text, role, sources = [], type = "answer") {
  const node = document.createElement("div");
  node.className = `message ${role}${type === "blocked" ? " blocked" : ""}`;
  const paragraphs = text.split("\n").filter(Boolean);
  node.innerHTML = paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");

  if (role === "bot" && sources.length > 0) {
    const row = document.createElement("div");
    row.className = "citation-row";
    sources.forEach((source) => {
      const badge = document.createElement("button");
      badge.type = "button";
      badge.className = "citation";
      const pageLabel = pageFromChunk(source) ? ` - Trang ${pageFromChunk(source)}` : "";
      badge.textContent = `${sourceKindLabel(source)} - ${source.dayCode} - ${source.citation}${pageLabel}`;
      badge.addEventListener("click", () => jumpToSource(source));
      row.appendChild(badge);
    });
    node.appendChild(row);
  }

  els.chatStream.appendChild(node);
  els.chatStream.scrollTop = els.chatStream.scrollHeight;
  return node;
}

function addBotMessage(text, sources = [], type = "answer") {
  const msgNode = addMessage(text, "bot", sources, type);
  renderSources(sources);
  return msgNode;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderSearchResults() {
  const query = els.librarySearch.value.trim();
  els.searchResults.innerHTML = "";
  if (!query || !state.ready) return;

  const { hits } = searchKnowledge(query, { limit: 4 });
  hits.forEach(({ chunk }) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `search-hit${chunk.citation === state.activeCitation ? " active" : ""}`;
    const pageLabel = pageFromChunk(chunk) ? ` - Trang ${pageFromChunk(chunk)}` : "";
    item.innerHTML = `<strong>${sourceKindLabel(chunk)} - ${chunk.dayCode} - [${chunk.citation}]${pageLabel}</strong><p>${escapeHtml(shorten(chunk.text, 180))}</p>`;
    item.addEventListener("click", () => {
      jumpToSource(chunk);
    });
    els.searchResults.appendChild(item);
  });

  if (hits.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Không có đoạn phù hợp trong tài liệu đã mở.";
    els.searchResults.appendChild(empty);
  }
}

function jumpToTopSearchResult() {
  const query = els.librarySearch.value.trim();
  if (query.length < 3 || !state.ready) return;

  const { hits } = searchKnowledge(query, { limit: 1 });
  const topHit = hits[0]?.chunk;
  if (!topHit || topHit.citation === state.activeCitation) return;
  jumpToSource(topHit);
}

function updateApiButtonState() {
  const hasKey = Boolean(state.apiConfig.apiKey);
  if (els.apiSettingsToggle) {
    els.apiSettingsToggle.classList.toggle("active-api", hasKey);
    els.apiSettingsToggle.textContent = hasKey ? "⚙️ Real API (Active)" : "⚙️ API AI";
  }
}

function render() {
  renderDaySelector();
  renderSlides();
  renderLibrary();
  renderAccessSummary();
  renderSearchResults();
  setChatOpen(state.chatOpen);
  updateApiButtonState();
}

// Modal API Logic
function openApiModal() {
  const { provider, apiKey, model, baseUrl } = state.apiConfig;
  els.apiProvider.value = provider || "openai";
  els.apiKeyInput.value = apiKey || "";
  els.apiModelInput.value = model || "";
  els.apiBaseUrlInput.value = baseUrl || "";
  els.apiStatusMsg.textContent = "";
  els.apiStatusMsg.className = "modal-status";
  toggleCustomUrlVisibility();
  els.apiModal.classList.remove("hidden");
}

function closeApiModal() {
  els.apiModal.classList.add("hidden");
}

function toggleCustomUrlVisibility() {
  const isCustom = els.apiProvider.value === "custom";
  els.customUrlGroup.style.display = isCustom ? "flex" : "none";
}

els.apiSettingsToggle.addEventListener("click", openApiModal);
els.apiModalClose.addEventListener("click", closeApiModal);
els.apiProvider.addEventListener("change", toggleCustomUrlVisibility);

els.apiForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const provider = els.apiProvider.value;
  const apiKey = els.apiKeyInput.value.trim();
  const model = els.apiModelInput.value.trim();
  const baseUrl = els.apiBaseUrlInput.value.trim();

  saveApiConfig({ provider, apiKey, model, baseUrl });
  updateApiButtonState();

  els.apiStatusMsg.textContent = apiKey ? "✓ Đã lưu cấu hình API thành công!" : "ℹ️ Đã xóa Key, sử dụng Local Mode.";
  els.apiStatusMsg.className = "modal-status success";

  setTimeout(closeApiModal, 800);
});

els.apiClearBtn.addEventListener("click", () => {
  els.apiKeyInput.value = "";
  saveApiConfig({ ...state.apiConfig, apiKey: "" });
  updateApiButtonState();
  els.apiStatusMsg.textContent = "ℹ️ Đã chuyển về Local Mode.";
  els.apiStatusMsg.className = "modal-status";
  setTimeout(closeApiModal, 600);
});

// Event Listeners
els.prevSlide?.addEventListener("click", () => {
  if (state.currentSlideIndex > 0) {
    state.currentSlideIndex -= 1;
    renderSlides();
  }
});

els.nextSlide?.addEventListener("click", () => {
  if (state.currentSlideIndex < currentSlides().length - 1) {
    state.currentSlideIndex += 1;
    renderSlides();
  }
});

els.chatToggle.addEventListener("click", () => setChatOpen(!state.chatOpen));
els.chatClose.addEventListener("click", () => setChatOpen(false));

els.input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    els.form.requestSubmit();
  }
});

els.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const question = els.input.value.trim();
  if (!question || !state.ready) return;

  setChatOpen(true);
  addMessage(question, "user");
  els.input.value = "";

  // Tạo thông báo đang suy nghĩ
  const loadingNode = addMessage("Tutor đang suy nghĩ và tra cứu kiến thức...", "bot", [], "answer");

  const result = await answerQuestion(question);

  // Xóa node loading và hiển thị kết quả chính thức
  if (loadingNode && loadingNode.parentNode) {
    loadingNode.parentNode.removeChild(loadingNode);
  }

  addBotMessage(result.text, result.sources, result.type);
});

els.librarySearch.addEventListener("input", () => {
  renderSearchResults();
});

document.querySelectorAll(".quick-actions button").forEach((button) => {
  button.addEventListener("click", () => {
    setChatOpen(true);
    els.input.value = button.dataset.question;
    els.form.requestSubmit();
  });
});

loadKnowledgeBase()
  .then(() => {
    render();
    addBotMessage(
      `Chào bạn! Bạn đang đọc ${formatDay(state.currentDay)}. Minh đã nạp ${state.chunks.length} đoạn kiến thức và chỉ sử dụng ${formatRange(state.currentDay)} để trả lời.`,
      []
    );
  })
  .catch((error) => {
    render();
    addBotMessage(
      `${error.message}. Hãy chạy ứng dụng bằng local server từ thư mục repo để trình duyệt đọc được thư viện kiến thức.`,
      [],
      "blocked"
    );
  });
