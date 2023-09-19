FROM oven/bun:latest AS base

WORKDIR /

COPY package*.json ./

RUN bun install

COPY . .

ENV PORT 3001

CMD ["next", "dev", "-H", "0.0.0.0"]