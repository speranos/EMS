FROM node:20-alpine

WORKDIR /app

COPY ./EmsRoute /app/EmsRoute

WORKDIR /app/EmsRoute

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]