FROM node:15.14.0-alpine3.10

WORKDIR /app

COPY . .

RUN npm i --production

EXPOSE 3000

CMD ["node", "index.js"]