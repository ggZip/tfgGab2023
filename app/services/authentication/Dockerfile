# Stage 1 - Build
FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


# Stage 2 - Production
FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3002

CMD ["npm", "start"]
