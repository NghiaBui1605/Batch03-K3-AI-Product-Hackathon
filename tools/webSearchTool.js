function pickArray(data) {
  if (Array.isArray(data)) return data;
  return (
    data.results ||
    data.organic ||
    data.items ||
    data.data?.results ||
    data.data?.organic ||
    data.data?.items ||
    data.webPages?.value ||
    []
  );
}

function normalizeResult(item, index) {
  const title = item.title || item.name || item.heading || item.displayed_title || `Kết quả ${index + 1}`;
  const url = item.url || item.link || item.href || item.website || item.data?.url || "";
  const snippet = item.snippet || item.description || item.text || item.content || item.body || "";
  return { title, url, snippet };
}

async function webSearchTool(env, query, options = {}) {
  const apiKey = env.RAPIDAPI_KEY || env.API_KEY;
  if (!apiKey) {
    return {
      tool: "web_search_tool",
      enabled: false,
      reason: "Missing RAPIDAPI_KEY.",
      results: [],
    };
  }

  const endpoint = env.RAPIDAPI_WEB_URL || env.RAPIDAPI_SEARCH_URL || env.RAPIDAPI_URL;
  const host = env.RAPIDAPI_WEB_HOST || env.RAPIDAPI_SEARCH_HOST || env.RAPIDAPI_HOST;
  if (!endpoint || !host) {
    return {
      tool: "web_search_tool",
      enabled: false,
      reason: "Missing RAPIDAPI_WEB_URL/RAPIDAPI_WEB_HOST.",
      results: [],
    };
  }

  const method = String(env.RAPIDAPI_WEB_METHOD || "GET").toUpperCase();
  const limit = Number(options.limit || env.RAPIDAPI_WEB_LIMIT || 5);
  const headers = {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": host,
  };

  let url = endpoint;
  const fetchOptions = { method, headers };

  if (method === "GET") {
    const parsed = new URL(endpoint);
    const queryParam = env.RAPIDAPI_WEB_QUERY_PARAM || env.RAPIDAPI_SEARCH_QUERY_PARAM || "q";
    if (!parsed.searchParams.has(queryParam)) parsed.searchParams.set(queryParam, query);
    url = parsed.toString();
  } else {
    headers["Content-Type"] = "application/json";
    fetchOptions.body = JSON.stringify({
      q: query,
      query,
      text: query,
      limit,
      num: limit,
    });
  }

  const response = await fetch(url, fetchOptions);
  const data = await response.json().catch(async () => response.text().catch(() => ""));
  if (!response.ok) {
    throw new Error(data.error?.message || data.message || `RapidAPI web search lỗi ${response.status}.`);
  }

  const results = pickArray(data)
    .map(normalizeResult)
    .filter((item) => item.title || item.snippet || item.url)
    .slice(0, limit);

  return {
    tool: "web_search_tool",
    enabled: true,
    results,
  };
}

module.exports = { webSearchTool };
