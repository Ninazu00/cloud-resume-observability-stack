FROM node:20-slim

WORKDIR /app

COPY backend/package*.json /app/backend/
COPY frontend/ /app/frontend/

WORKDIR /app/backend

RUN npm ci

COPY backend/ /app/backend/

EXPOSE 3000

USER node

CMD ["node", "server.js"]