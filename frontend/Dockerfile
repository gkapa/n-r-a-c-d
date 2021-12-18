FROM node:13.12.0-alpine3.10
WORKDIR /app

COPY ./app/package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g

CMD ["npm", "start"]