FROM node:18-alpine

ENV MESSAGE="Hello from environment!"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"] 