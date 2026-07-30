# VLearn Knowledge Tutor

Prototype chatbot cho lat cat: hoc vien dang doc slide hien tai nhung can hoi lai kien thuc tu cac slide da hoc truoc do.

## Chay thu

Tu thu muc goc repo:

```powershell
node server.js
```

Mo:

```text
http://localhost:5173/codebase/
```

Nếu port `5173` đang bận, chạy:

```powershell
$env:PORT=5174; node server.js
```

Rồi mở:

```text
http://localhost:5174/codebase/
```

## Cau hinh API bang .env

Tao file `.env` o thu muc goc repo. Voi OpenRouter:

```env
AI_PROVIDER=openrouter
OPENROUTER_API_KEY=sk-or-v1-your-key-here
AI_MODEL=openai/gpt-4o-mini
AI_BASE_URL=https://openrouter.ai/api/v1
```

Voi OpenAI-compatible endpoint nhu Qwen/Alibaba:

```env
OPENAI_API_KEY=your-key
OPENAI_BASE_URL=https://your-compatible-endpoint/v1
LAB_MODEL=qwen-plus-2025-04-28
```

Voi RapidAPI, `RAPIDAPI_KEY` chua du. Ban can chon mot API chat/LLM tren RapidAPI va dien host + endpoint:

```env
AI_PROVIDER=rapidapi
RAPIDAPI_KEY=your-rapidapi-key
RAPIDAPI_AI_HOST=your-chat-api-host.p.rapidapi.com
RAPIDAPI_AI_URL=https://your-chat-api-host.p.rapidapi.com/path/to/chat-endpoint
AI_MODEL=gpt-4o-mini
```

Luu y: `RAPIDAPI_TWITTER_HOST=twitter-api45.p.rapidapi.com` la API Twitter, khong dung lam chatbot hoi dap tong quat duoc.

## Tinh nang demo

- Slide viewer nam o giua man hinh.
- Chatbot nam ben phai va co nut an/hien.
- Co 6 bo slide demo, moi Day co 3 slide.
- Tien do hoc quyet dinh quyen truy cap: neu dang o Day05, bot chi dung Day01-Day05.
- Neu hoi Day04 khi dang o Day05, bot truy hoi transcript Day04 va tra loi kem citation.
- Neu hoi Day06 khi dang o Day05, bot tu choi vi Day06 chua duoc mo quyen.
- App nap transcript truc tiep tu `data/vlearn-pack/transcript/`, khong copy data vao `codebase`.
