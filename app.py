from flask import Flask, request, send_from_directory, render_template, jsonify
import os
from datetime import datetime

app = Flask(__name__)

UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Function to get directories (day-wise)
def get_directories():
    directories = [d for d in os.listdir(app.config['UPLOAD_FOLDER']) if os.path.isdir(os.path.join(app.config['UPLOAD_FOLDER'], d))]
    return directories

# Ensure the folder for today exists
def create_today_folder():
    today = datetime.now().strftime('%Y-%m-%d')
    today_folder = os.path.join(app.config['UPLOAD_FOLDER'], today)
    if not os.path.exists(today_folder):
        os.makedirs(today_folder)
    return today_folder

# Serve file from uploads folder
@app.route('/uploads/<folder>/<filename>')
def uploaded_file(folder, filename):
    return send_from_directory(os.path.join(app.config['UPLOAD_FOLDER'], folder), filename)

# Serve files in a directory (e.g., for 2024-11-29)
@app.route('/files/<directory>')
def get_files_in_directory(directory):
    directory_path = os.path.join(app.config['UPLOAD_FOLDER'], directory)
    if os.path.exists(directory_path):
        files = os.listdir(directory_path)
        return jsonify({'files': files})
    else:
        return jsonify({'files': []})

# Main page: Display list of directories
@app.route('/')
def index():
    # Automatically create today's folder if it doesn't exist
    create_today_folder()
    
    directories = get_directories()
    return render_template('index.html', directories=directories)

# Handle file upload
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return "Không tìm thấy file trong yêu cầu!"
    
    file = request.files['file']
    if file.filename == '':
        return "Không có file nào được chọn!"
    
    # Get the new filename from the form
    new_filename = request.form.get('new_filename')  # The name entered by the user

    if not new_filename:
        return "Bạn chưa nhập tên mới cho tệp!"

    # Automatically create today's folder if it doesn't exist
    today_folder = create_today_folder()

    # Ensure the new filename has the correct extension
    file_extension = os.path.splitext(file.filename)[1]
    new_filename_with_extension = f"{new_filename}{file_extension}"

    # Save the file with the new name
    file.save(os.path.join(today_folder, new_filename_with_extension))
    return f"Upload thành công với tên file: {new_filename_with_extension}"

# Start the server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8444)
