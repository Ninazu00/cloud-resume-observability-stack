# Stage 1 — install dependencies
FROM node:20-slim AS builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci --omit=dev

# Stage 2 — lean runtime image (no npm)
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/backend/node_modules ./backend/node_modules
COPY backend/ ./backend/
COPY frontend/ ./frontend/
EXPOSE 3000
USER node
CMD ["node", "backend/server.js"]