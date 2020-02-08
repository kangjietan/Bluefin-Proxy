FROM node:8.10-alpine

RUN mkdir -p /src/app

RUN apk add --no-cache git

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=prod

EXPOSE 3000

CMD [ "npm", "start" ]