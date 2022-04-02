FROM node:16.13.0-alpine AS builder
WORKDIR /server
COPY package.json ./
RUN npm config set unsafe-perm true
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install
COPY . .
RUN npm run build

FROM node:16.13.0-alpine
WORKDIR /server
COPY package.json ./
RUN npm install --production
COPY --from=builder /server/lib ./lib
COPY .env .
COPY /db ./db

EXPOSE 5500
CMD [ "node", "./lib/src/server.js" ]
