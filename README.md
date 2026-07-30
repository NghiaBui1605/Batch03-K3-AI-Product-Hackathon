# VLearn Knowledge Tutor - PoorTeam E403

## Thành viên nhóm

| Mã HV | Họ tên | Phân công chính |
|---|---|---|
| 2A202601880 | Bùi Hữu Nghĩa | Backend chatbot, cấu hình API/model, thêm `lesson_search_tool`, `web_search_tool`, chạy eval và push repo. |
| 2A202601807 | Hoàng Tuấn Trung | Frontend prototype trong `codebase/`, luồng xem slide, tìm kiếm tài liệu, click citation/search result để nhảy slide. |
| 2A202602031 | Hà Nhật Khánh Duy | AI Spec, golden set trong `eval/`, phân tích quality bar, validation log và demo script. |

## Sản phẩm

VLearn Knowledge Tutor là chatbot học tập cho tài liệu VLearn. Khi người dùng hỏi về bài học, chatbot tìm trong slide/transcript bằng `lesson_search_tool` và trả lời có nguồn. Khi người dùng hỏi ngoài phạm vi slide nhưng cần thông tin bên ngoài, chatbot có thể dùng `web_search_tool` qua RapidAPI nếu đã cấu hình. Chatbot không tự nhảy slide; người dùng chỉ chuyển slide khi bấm citation hoặc kết quả tìm kiếm.

## Cách chạy prototype

Tạo file `.env` từ `.env.example`, điền API key hợp lệ, rồi chạy:

```powershell
$env:PORT=5186
node server.js
```

Mở giao diện:

```text
http://localhost:5186/codebase/
```

Chạy bộ kiểm thử:

```powershell
$env:TEST_API_URL="http://localhost:5186/api/chat"
node eval/run_tests.js
```

Kết quả gần nhất trong `eval/results_latest_summary.json`: 30/30 case đạt nếu tính `PASS`, `PASS_REVIEWED`, `PASS_CODE_CHECK`.

## Cấu trúc bài nộp

| File / thư mục | Nội dung |
|---|---|
| `README.md` | Thành viên, phân công, cách chạy prototype. |
| `spec.md` | AI Spec theo `03-template-ai-spec.md`. |
| `demo-slides.pdf` | Slide demo 6 trang theo `02-guide.md` §5.1. |
| `codebase/` | Prototype giao diện VLearn Tutor. |
| `eval/` | Golden set, script chạy test và bảng kết quả. |
| `validation/` | Feedback log từ vòng user test/tự test có trích dẫn. |
| `reflection/` | Reflection cá nhân của từng thành viên. |

## Phần mock / chưa hoàn thiện

- `web_search_tool` đã có code và endpoint, nhưng chỉ chạy thật khi `.env` có đủ `RAPIDAPI_KEY`, `RAPIDAPI_WEB_HOST`, `RAPIDAPI_WEB_URL`.
- Tài khoản người dùng, lưu tiến độ học cá nhân và dashboard giáo viên chưa làm ở prototype này.
- Validation hiện ghi lại các phản hồi/tình huống quan sát được trong quá trình self-test và cần bổ sung thêm người ngoài nhóm nếu còn thời gian.

## File quan trọng

- `spec.md`: mô tả bài toán, bằng chứng, lát cắt, quality bar, thiết kế AI.
- `server.js`: backend gọi model và điều phối tool.
- `tools/lessonSearchTool.js`: tool tìm kiếm trong slide/transcript.
- `tools/webSearchTool.js`: tool tìm kiếm web qua RapidAPI.
- `eval/test_cases.json`: golden set 30 test case.
- `eval/results_latest_summary.json`: kết quả chạy thử gần nhất.
