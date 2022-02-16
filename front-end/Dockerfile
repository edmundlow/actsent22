FROM node:latest

RUN npm install -g serve

COPY package.json package-lock.json /app/

RUN cd /app/ && npm install 

COPY ./src/  /app/src/

COPY ./public/ /app/public/

RUN cd /app/ && npm run build

EXPOSE 3001

CMD serve -s /app/build/ -l 3001