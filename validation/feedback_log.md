# Validation log - VLearn Knowledge Tutor

Theo `02-guide.md` §4.2, mỗi dòng nên ghi: người thử, task, quan sát, quote nguyên văn, mức nghiêm trọng.

## Feedback đã ghi nhận

| Người thử | Task | Quan sát | Quote nguyên văn | Mức nghiêm trọng | Thay đổi đã làm |
|---|---|---|---|---|---|
| Bùi Hữu Nghĩa - thành viên nhóm | Tìm "agent" trong tài liệu | Search có kết quả nhưng click chưa điều hướng đúng slide ở bản đầu. | "ví dụ tôi tìm agent nhưng slide k nhảy tới phần agent" | Cao | Sửa search result/citation gọi `jumpToSource()` và reload PDF iframe bằng `#page`. |
| Bùi Hữu Nghĩa - thành viên nhóm | Dùng chatbot trong lúc xem slide | Auto-jump làm người dùng mất quyền kiểm soát khi đang chat. | "bây giờ trong chatbot tôi không muốn nhảy slide nữa" | Cao | Bỏ auto-jump trong chatbot; chỉ nhảy khi người dùng bấm citation/search result. |
| Bùi Hữu Nghĩa - thành viên nhóm | Gửi tin nhắn chat | Input chỉ gửi bằng nút "Gửi", chưa dùng Enter được. | "có thể enter thay vì chỉ đc nhấn gửi" | Vừa | Thêm Enter để gửi, Shift+Enter để xuống dòng. |
| Bùi Hữu Nghĩa - thành viên nhóm | Hỏi tóm tắt Day1 | Bot từng chỉ đọc top nguồn nên tóm tắt thiếu nhiều phần. | "hình như chatbot đg k đọc đc hết slide khi tôi bảo nó tóm tắt day1 thấy thiếu khá nhiều" | Cao | Với câu tóm tắt Day1/Day2, gửi toàn bộ slide của Day đó làm context. |
| Bùi Hữu Nghĩa - thành viên nhóm | Hỏi câu ngoài slide | Bot từng gợi ý/định hướng slide cả khi câu hỏi không thuộc bài học. | "những câu hỏi không nằm trong phạm vi slide k cần gợi ý và cũng k nên cho nhảy slide ngay" | Cao | Tách lesson mode và normal chat; câu thường không có source và không điều hướng slide. |

## Tổng hợp

- Chủ đề lặp nhiều nhất: người dùng muốn giữ quyền kiểm soát điều hướng slide, không muốn chatbot tự nhảy.
- Thay đổi làm trước demo: bỏ auto-jump trong chatbot, sửa click search/citation, thêm Enter submit, thêm `lesson_search_tool`.
- Giữ nguyên có lý do: chatbot vẫn hiển thị citation khi hỏi bài học để người dùng tự kiểm chứng.
- Backlog: bổ sung ít nhất 5 người ngoài nhóm test theo đúng form CP5 nếu còn thời gian.
