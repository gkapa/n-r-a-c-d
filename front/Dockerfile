FROM node:16.13.1-alpine

RUN mkdir /app_front
WORKDIR /app_front

COPY ./package*.json ./yarn.lock ./
RUN yarn

COPY . .
RUN yarn run build
CMD ["yarn", "start"]