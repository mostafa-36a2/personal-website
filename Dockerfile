# Stage 1: Build the client
FROM node:18-alpine AS client-builder
WORKDIR /app
COPY client/package.json client/package-lock.json ./client/
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build --prefix client

# Stage 2: Build the server
FROM node:18-alpine AS server-builder
WORKDIR /app
COPY server/package.json server/package-lock.json ./server/
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build --prefix server

# Stage 3: Production image
FROM node:18-alpine
WORKDIR /app

# Copy built assets
COPY --from=client-builder /app/client/dist ./client/dist
COPY --from=server-builder /app/server/dist ./server/dist

# Copy necessary files
COPY --from=server-builder /app/server/package.json ./server/
COPY --from=client-builder /app/client/package.json ./client/
COPY package.json package-lock.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy other required files
COPY shared ./shared
COPY drizzle.config.ts .
COPY tailwind.config.ts .
COPY tsconfig.json .

# Expose ports (client on 3000, server on 5000)
EXPOSE 3002 5002

# Start both client and server
CMD ["sh", "-c", "npm run start --prefix server & serve -s client/dist -l 3000"]
