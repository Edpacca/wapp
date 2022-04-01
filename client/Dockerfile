FROM node:16.13.0-alpine as build

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@4.0.3 -g

COPY . ./

RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "build"]
