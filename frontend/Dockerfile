FROM node:18-alpine as base
WORKDIR /code
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine as dev

WORKDIR /code
COPY . .
COPY --from=base /code/node_modules ./node_modules
COPY --from=base /code/package.json ./package.json

EXPOSE 3000


FROM node:18-alpine AS build

WORKDIR /code
COPY . .
COPY --from=base /code/node_modules ./node_modules
COPY --from=base /code/package.json ./package.json

RUN npm run build
