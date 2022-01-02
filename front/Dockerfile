FROM node:16.13.1-alpine

RUN mkdir /app_front
WORKDIR /app_front

COPY ./package*.json ./
RUN npm install

COPY . .
RUN npm run build
CMD ["npm", "run", "start"]