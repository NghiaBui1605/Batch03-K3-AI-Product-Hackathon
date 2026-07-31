# Validation log - VLearn Knowledge Tutor

Theo `02-guide.md` §4.2, mỗi dòng nên ghi: người thử, task, quan sát, quote nguyên văn, mức nghiêm trọng.

## Feedback ngoài nhóm 


| Người thử | Task | Quan sát | Quote nguyên văn | Mức nghiêm trọng | Thay đổi đã làm |
|---|---|---|---|---|---|
| Phạm Tuấn Việt | Tìm “agent” và mở nguồn trích dẫn | Kết quả tìm kiếm có liên quan nhưng người thử muốn được chuyển thẳng đến đúng slide để kiểm chứng nhanh hơn. | “Khi bấm vào nguồn trích dẫn, tôi muốn hệ thống chuyển ngay đến đúng slide liên quan để kiểm tra, thay vì phải tự tìm lại trong toàn bộ tài liệu.” | Cao | Sửa kết quả tìm kiếm và citation gọi `jumpToSource()`, sau đó tải lại PDF iframe với `#page` để mở đúng trang nguồn. |
| Phạm Tiến Anh | Hỏi chatbot trong khi đang đọc slide | Việc tự động chuyển trang làm gián đoạn luồng đọc và khiến người thử cảm thấy mất quyền kiểm soát. | “Chatbot trả lời khá dễ hiểu nhưng không nên tự động chuyển slide khi tôi đang đọc. Tôi muốn tự quyết định thời điểm mở nguồn tham khảo.” | Cao | Bỏ cơ chế auto-jump trong chatbot. Hệ thống vẫn hiển thị citation nhưng chỉ chuyển slide khi người dùng chủ động bấm vào citation hoặc kết quả tìm kiếm. |
| Trần Huy Hoàng | Yêu cầu chatbot tóm tắt Day 1 | Bản tóm tắt ban đầu bỏ sót nội dung vì hệ thống chỉ sử dụng một số nguồn có điểm liên quan cao nhất. | “Phần tóm tắt Day 1 còn thiếu một số nội dung quan trọng. Hệ thống nên đọc toàn bộ bài trước khi tổng hợp, không chỉ dựa vào vài kết quả đầu tiên.” | Cao | Với yêu cầu tóm tắt Day 1 hoặc Day 2, backend đưa toàn bộ nội dung của buổi học vào context thay vì chỉ lấy ba nguồn đứng đầu. |
| Đinh Xuân Huy | Nhập và gửi câu hỏi trong khung chat | Người thử có thói quen dùng bàn phím và thấy thao tác chậm khi mỗi lần gửi đều phải di chuyển chuột đến nút “Gửi”. | “Tôi thường nhấn Enter ngay sau khi nhập xong câu hỏi. Nếu lần nào cũng phải bấm nút Gửi thì hơi mất nhịp, nhưng Shift+Enter vẫn nên dùng được khi cần xuống dòng.” | Vừa | Thêm Enter để gửi tin nhắn và Shift+Enter để xuống dòng. Nút “Gửi” vẫn được giữ nguyên để giao diện dễ hiểu với người dùng mới. |
| Ngô Quang Dũng | Đặt câu hỏi không thuộc nội dung bài học | Bot từng gắn nguồn hoặc điều hướng về slide ngay cả khi câu hỏi không liên quan, khiến người thử hiểu nhầm rằng câu trả lời có trong học liệu. | “Nếu tôi hỏi chuyện bên ngoài bài học thì chatbot không nên cố gắn một slide vào câu trả lời. Chỉ cần trả lời bình thường hoặc nói rõ là nội dung này không có trong tài liệu.” | Cao | Tách lesson mode và normal chat. Câu hỏi ngoài phạm vi bài học không tự gắn citation hoặc điều hướng slide; hệ thống chỉ dùng web search khi thật sự cần thông tin bên ngoài và đã được cấu hình. |

## Tổng hợp

- Chủ đề lặp nhiều nhất: người dùng muốn kiểm chứng câu trả lời nhanh nhưng vẫn giữ quyền chủ động điều hướng slide.
- Thay đổi làm trước demo: sửa click search/citation để mở đúng trang, bỏ auto-jump, mở rộng context khi tóm tắt toàn bộ Day, hỗ trợ Enter để gửi và tách lesson mode khỏi normal chat.
- Giữ nguyên có lý do: chatbot vẫn hiển thị citation khi hỏi bài học để người dùng tự kiểm chứng.
- Backlog: xác nhận lại câu trích dẫn với cả năm người thử và chạy lại các task sau khi họ xác nhận để hoàn thiện bằng chứng validation.
