# Use official Node.js image
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install express
EXPOSE 3000
CMD ["node", "server.js"]
