# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Define build-time argument
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

COPY . .
RUN npm install

# Pass the environment variable to Vite
RUN npm run build

# Serve with 'serve'
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 7070
CMD ["serve", "-s", "dist", "-l", "7070"]
