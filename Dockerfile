FROM node:20

WORKDIR /app

COPY backend/ /app/backend/
COPY frontend/ /app/frontend/

WORKDIR /app/backend

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]