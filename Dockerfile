FROM node:14

WORKDIR /usr/src/App

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","App.jsx"]
