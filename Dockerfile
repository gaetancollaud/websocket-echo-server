FROM node:alpine

ADD package.json index.js ./

RUN npm install

CMD ["node", "index.js"]
