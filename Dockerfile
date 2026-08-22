# =============================================================================
# Multi-stage Dockerfile for Next.js Portfolio with Static Export
# =============================================================================

# -----------------------------------------------------------------------------
# STAGE 1: BUILDER - Build the Next.js application
# -----------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for reproducible builds
COPY package.json package-lock.json ./

# Install dependencies from lockfile (faster and more reliable)
RUN npm ci

# Copy all source files
COPY . .

# Create next.config.mjs dynamically with static export enabled
RUN echo "/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}
export default nextConfig" > next.config.mjs

# Build the Next.js application
RUN npm run build

# -----------------------------------------------------------------------------
# STAGE 2: RUNTIME - Serve with Nginx
# -----------------------------------------------------------------------------
FROM nginx:alpine

# Copy built static files from builder stage
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
