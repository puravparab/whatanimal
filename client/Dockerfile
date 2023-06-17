FROM node:18-alpine AS base

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./

RUN npm ci

COPY . .

cmd ["npm", "run", "dev"]