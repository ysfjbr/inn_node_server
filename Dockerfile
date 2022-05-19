FROM node:16
WORKDIR /usr/app
COPY package.json /usr/app/
RUN yarn
COPY . .