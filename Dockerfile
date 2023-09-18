FROM oven/bun:latest AS base

WORKDIR /

COPY package*.json ./

RUN bun install

COPY . .

CMD [ "next", "dev" ]