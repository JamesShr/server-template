# ==== BUILD STAGE ====
FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

# # Optional: Only generate client for specific services
# RUN npx prisma generate --schema=libs/prisma/src/schema/data-management/schema.prisma

# Build specific app (api-gateway)
RUN npx nx build api-gateway

# ==== RUNTIME STAGE ====
FROM node:20-alpine

WORKDIR /app

# 建議仍保留 dumb-init / ssh / postgresql-client 等
RUN apk update && \
    apk add --no-cache dumb-init openssh-client sshpass postgresql-client bash

# Copy runtime dependencies
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/config/ ./config

# # Copy prisma (if your app runs prisma CLI or uses .env)
# COPY --from=builder /app/libs/prisma ./libs/prisma

# Copy built dist
COPY --from=builder /app/apps/api-gateway/dist ./dist

# Optional: entry script
COPY --from=builder /app/apps/api-gateway/scripts/ ./scripts
RUN chmod +x ./scripts/*.sh

# 若有 uploads 或其他資料夾也要預設建立好
RUN mkdir -p /app/uploads && chown -R node:node /app/uploads

# 使用 node user 啟動
USER node

# Entry
ENTRYPOINT ["/usr/bin/dumb-init", "--", "./scripts/entry.sh"]