FROM node:latest

RUN npm install -g serve

COPY ./build /app/

EXPOSE 3001

CMD serve -s app -l 3001