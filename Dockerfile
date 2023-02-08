FROM node:18-alpine as builder

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --legacy-peer-deps

COPY . .

FROM node:18-alpine as server

WORKDIR /app

COPY --from=builder /app .

RUN npm run build

CMD [ "npm", "run", "start:prod" ]