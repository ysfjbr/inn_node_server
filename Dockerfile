FROM node:14.19.1-alpine
WORKDIR /usr/app
COPY package.json .
RUN yarn
COPY . .