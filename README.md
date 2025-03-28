## WEATHER APP
Sử dụng API openweathermap để lấy dữ liệu hiển thị.
Với Front-end dùng HTML / CSS, Back-end sử dụng Express để đơn giản và tiện lợi cho project nhỏ

## Target
🎯 Mục tiêu:
✅ Ứng dụng cho phép người dùng nhập tên thành phố/quốc gia.
✅ Fetch dữ liệu thời tiết từ OpenWeather API.
✅ Hiển thị thông tin thời tiết (nhiệt độ, độ ẩm, tốc độ gió).
✅ Giao diện UI trực quan, phản hồi nhanh.
✅ Hệ thống có backend để ẩn API key và mở rộng sau này.

## Phân tích hệ thống -> Hiểu rõ luồng dữ liệu
1️⃣ Frontend (React/Vue hoặc HTML/CSS/JS thuần)
	•	Input cho người dùng nhập thành phố.
	•	Gửi request lên backend khi người dùng nhấn nút.
	•	Hiển thị dữ liệu thời tiết từ backend.
2️⃣ Backend (Node.js + Express)
	•	Nhận request từ frontend (tên thành phố).
	•	Fetch data từ OpenWeather API.
	•	Xử lý dữ liệu, ẩn API key.
	•	Trả JSON response cho frontend.
## Luồng: [Front-end] -> request -> [Back-end] -> call api [OpenWeather API] -> response -> [Back-end] -> Response [Front-end]

## 1. Khởi tạo server back-end
## 2. Xây dựng giao diện Front-end
## 3. Các task cần làm:
- Thiết lập server Express
- Chạy thành công server và liên kết thành công đến Front-end
- Thiết lập call API mặc định đến localhost:3000 và localhost:3000/weather
- Xử lý data được api call về mặc định (ví dụ: Việt Nam) hiển thị trên giao diện
- Xử lý thành phần input tương tác trên giao diện để truyền data vào (thay vì hard code)
- Thay đổi CSS phù hợp với từng kết quả truyền về
- Hoàn thành