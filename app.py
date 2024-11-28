from flask import Flask, request, send_from_directory, render_template
import os

app = Flask(__name__)

UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Cung cấp file tĩnh từ thư mục uploads
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Trang chính: Hiển thị danh sách file
@app.route('/')
def index():
    files = os.listdir(app.config['UPLOAD_FOLDER'])
    return render_template('index.html', files=files)

# Xử lý upload file
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "Không tìm thấy file trong yêu cầu!"
    file = request.files['file']
    if file.filename == '':
        return "Không có file nào được chọn!"
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    return "Upload thành công!"

# Khởi động server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8444)
