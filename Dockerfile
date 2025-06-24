# Stage 1: Сборка React-приложения
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Nginx для продакшена
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Удаляем дефолтный конфиг и добавляем свой
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]