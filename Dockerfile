FROM node:18

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install

RUN npm run build

ENV PORT=4000

EXPOSE 4000

cmd ["npm", "run", "start"]
