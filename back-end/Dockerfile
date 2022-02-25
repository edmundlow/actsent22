FROM node:latest

COPY package.json package-lock.json /app/

RUN cd /app && npm install

COPY local.js /app/

EXPOSE 3000

CMD cd /app && node local.js