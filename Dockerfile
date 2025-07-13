# Stage 1: Build frontend
FROM node:18 AS frontend-build
WORKDIR /app/client
COPY client/package*.json ./
ENV NODE_ENV=production
RUN npm install
COPY client ./
RUN npm run build

# Stage 2: Build backend
FROM node:18 AS backend-build

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=production

RUN npm install

COPY . .

RUN npm run build

RUN npm prune --omit=dev

# Stage 3: Production container
FROM node:18-slim
WORKDIR /app

# Copy backend build
COPY --from=backend-build /app/dist ./dist

# Copy frontend build
COPY --from=frontend-build /app/client/dist ./public

# Copy only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Expose app port
EXPOSE 3000

# Run app
CMD ["node", "dist/index.js"]
# CMD ["sleep","infinite"]
