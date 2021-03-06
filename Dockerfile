FROM node:14-buster-slim as builder

# FROM arm32v7/node:14-buster-slim as builder

RUN mkdir ./ampsvelte

WORKDIR /ampsvelte

COPY . .

RUN \
    npm ci && \
    npm run build

FROM httpd:2-alpine

COPY --from=builder ./ampsvelte/build/ /usr/local/apache2/htdocs/
