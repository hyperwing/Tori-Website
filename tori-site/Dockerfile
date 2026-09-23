# Stage 1: Build the React App
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the App with Nginx
FROM nginx:alpine
# Copy custom Nginx routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built static files from Vite's dist folder
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]