# Build stage
FROM node:22.12.0-slim AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22.12.0-slim AS production

WORKDIR /app

# Install serve for static hosting
RUN npm install -g serve@14

# Copy built assets
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start serve
CMD ["serve", "-s", "dist", "-l", "3000"]
