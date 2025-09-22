# ==== BUILD STAGE ====
FROM node:lts-alpine AS base

WORKDIR /workspace

# copy workspace config
COPY package*.json nx.json tsconfig.base.json ./
COPY libs ./libs

# install all deps
RUN npm ci