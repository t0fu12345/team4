   ### Quy trình làm việc
## PHẦN 1: Cho người MỚI (Chưa có bất kỳ code nào của dự án trong máy)
Khi một thành viên mới tham gia vào dự án, họ không tự tạo folder rồi kết nối thủ công. Họ chỉ cần dùng đúng 1 lệnh duy nhất để tải toàn bộ dự án về máy.

Bước 1: Mở Terminal (hoặc Git Bash) trên máy tính tại thư mục muốn lưu dự án (ví dụ: ổ D:/Projects).

Bước 2: Chạy lệnh Tải dự án (Clone):
git clone https://github.com/t0fu12345/team4.git
Bước 3: Dùng VS Code mở đúng cái thư mục vừa được tải về đó lên (File -> Open Folder -> team4).

⚠️ Lưu ý: Lúc này máy đã tự động kết nối hoàn toàn với repo GitHub chung, không cần chạy lệnh git init hay git remote add gì nữa cả.

## PHẦN 2: Quy trình làm việc HÀNG NGÀY (Mỗi người một nhánh riêng)
Sau khi đã có code trong máy (bằng cách clone ở Phần 1 hoặc chính là máy hiện tại của bạn), quy trình mỗi buổi làm việc sẽ diễn ra như sau:

1. Đầu buổi làm việc (Kéo code mới nhất về)
Trước khi code, phải lấy code mới nhất mà các thành viên khác đã gộp vào main:
git checkout main
git pull origin main

TEST

2. Tạo nhánh riêng để làm tính năng mới
Tuyệt đối không code trực tiếp trên main. Hãy tạo một nhánh mang tên mình hoặc tên tính năng mình làm:
Ví dụ: git checkout -b nhanh-cua-quang

3. Trong buổi làm việc (Code và Lưu liên tục dưới máy)
Cứ làm xong một giao diện, một cái nút, hãy commit lại để lưu lịch sử (lúc này chỉ lưu dưới máy của bạn):
git add .
git commit -m "feat: lam xong giao dien login"

4. Cuối buổi hoặc khi xong tính năng (Push lên GitHub)
Đẩy nhánh riêng này lên mạng (Chỉ đẩy lên nhánh của mình):
git push origin nhanh-cua-quang

5. Tạo Merge Request / Pull Request (Làm trên web GitHub)
Truy cập vào link repo: https://github.com/t0fu12345/team4
Bạn sẽ thấy nút "Compare & pull request" màu vàng của nhánh bạn vừa push. Bấm vào đó.
Chọn đích đến (base: main) <- nguồn từ (compare: nhanh-cua-quang).
Viết mô tả những gì bạn đã làm rồi nhấn Create pull request.
Duyệt code: Lúc này cả nhóm (hoặc leader) sẽ vào xem file thay đổi, nếu ok thì bấm nút Merge pull request để chính thức gộp code của bạn vào main.

## PHẦN 3: Những LƯU Ý XƯƠNG MÁU khi làm việc nhóm
1. Tuyệt đối KHÔNG dùng lệnh git push -f (Force Push): Lệnh này sẽ xóa sạch lịch sử và code của người khác trên GitHub để đè code của bạn lên. Làm việc nhóm mà dùng lệnh này là "hủy diệt" code của bạn bè.

2. File nào không được up lên mạng? Những thư mục nặng như node_modules (khi làm React/NodeJS) hoặc các file chứa mật khẩu (.env) tuyệt đối không up lên GitHub. Hãy tạo một file tên là .gitignore ở thư mục gốc và điền tên các file muốn bỏ qua vào đó.

3. Giải quyết xung đột (Conflict): Khi bạn và một người khác cùng sửa chung một dòng code trong cùng một file, khi tạo Pull Request, GitHub sẽ báo đỏ (Conflict).

Cách xử lý: Bạn phải về VS Code dưới máy, chạy lệnh git pull origin main ngay tại nhánh của bạn. VS Code sẽ hiện màu xanh/đỏ tại dòng bị xung đột. Bạn và bạn của bạn phải ngồi lại xem giữ lại dòng code của ai, xóa dòng của ai đi. Sau đó commit và push lại.

4. Đặt tên nhánh rõ ràng: Nên đặt tên nhánh theo cấu trúc: tên-bạn/tính-năng (Ví dụ: quang/login-page, cuong/database-setup) để nhìn vào biết nhánh đó của ai và đang làm gì.