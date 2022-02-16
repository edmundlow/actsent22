FROM node:latest

COPY package.json package-lock.json server.js /app/

RUN cd /app && npm install

EXPOSE 3001

CMD cd /app && node server.js