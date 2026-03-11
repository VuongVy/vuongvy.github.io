FROM node:20-alpine

# Cài đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các thư viện Node.js (Express)
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000 để truy cập
EXPOSE 3000

# Chạy server
CMD ["npm", "start"]
