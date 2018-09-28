FROM node:8.12.0-alpine as react-build
ARG API_URL
ARG API_PORT
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build:prod

FROM nginx:alpine
COPY --from=react-build /app/dist /usr/share/nginx/html
EXPOSE 9090
CMD ["nginx", "-g", "daemon off;"]
