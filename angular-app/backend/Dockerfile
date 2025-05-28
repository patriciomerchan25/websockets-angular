FROM node:18

WORKDIR /app

COPY src/server.js .

RUN npm install ws

CMD ["node", "server.js"]