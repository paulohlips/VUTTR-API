FROM node:10

WORKDIR /api
COPY package.json yarn.lock ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
