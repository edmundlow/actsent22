FROM node:latest

COPY ./src/  /app/src/

COPY ./public/ /app/public/

COPY package.json package-lock.json /app/

RUN cd /app/ && npm install 

RUN npm install -g serve

RUN cd /app/ && npm run build

EXPOSE 3001

CMD serve -s /app/build/ -l 3001