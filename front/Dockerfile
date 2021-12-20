FROM node:16.13.1-alpine
WORKDIR /code

ENV CHOKIDAR_USEPOLLING=true

COPY ./package*.json ./yarn.lock ./
RUN yarn
# RUN npm install react-scripts@3.0.1 -g

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]