# Sử dụng Node.js làm hình ảnh cơ sở
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép các tệp cần thiết vào hình ảnh
COPY package.json yarn.lock ./

# Cài đặt các phụ thuộc bằng Yarn
RUN yarn install --frozen-lockfile

# Sao chép mã nguồn ứng dụng vào hình ảnh
COPY . .

# Xây dựng ứng dụng Next.js
RUN yarn build

# Thiết lập biến môi trường cho ứng dụng
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Mở cổng ứng dụng
EXPOSE 3000

# Chạy ứng dụng Next.js
CMD ["yarn", "start"]
