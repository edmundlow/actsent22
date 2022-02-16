FROM node:latest

COPY ./build package.json package-lock.json /app/

RUN cd /app && npm install && npm install -g serve

EXPOSE 3001

CMD cd /app && serve -s build -l 3001