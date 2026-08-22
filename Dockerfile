# =============================================================================
# Multi-stage Dockerfile for Next.js Portfolio with Static Export
# =============================================================================
# This Dockerfile builds using the graded files plus essential config:
# Dockerfile, README.md, package.json, app/*, components/*, data/*, etc.
# Plus: tsconfig.json, next.config.mjs, app/globals.css
# =============================================================================

# -----------------------------------------------------------------------------
# STAGE 1: BUILDER - Build the Next.js application
# -----------------------------------------------------------------------------
FROM node:20-alpine AS builder
# Uses Node.js 20 with Alpine Linux (minimal ~130MB image)
# 'AS builder' names this stage for later reference

WORKDIR /app
# Sets the working directory inside the container to /app
# All subsequent commands run from this directory

# Copy package files first for better Docker layer caching
COPY package.json package-lock.json ./
# package.json and package-lock.json are used for reproducible dependency installation

# Install dependencies using npm ci (clean install from lockfile)
RUN npm ci
# npm ci reads package-lock.json and installs exact versions
# Faster and more reliable than npm install for CI/CD

# Copy all source files
COPY . .
# Copies: app/, components/, data/, tsconfig.json, next.config.mjs, etc.
# All files needed for Next.js build

# Build the Next.js application
RUN npm run build
# With output: 'export' in next.config.mjs, this creates /app/out directory
# Contains static HTML, CSS, JS files ready for deployment

# -----------------------------------------------------------------------------
# STAGE 2: RUNTIME - Serve with Nginx
# -----------------------------------------------------------------------------
FROM nginx:alpine
# Uses Nginx with Alpine Linux (~25MB) as lightweight production web server
# Much smaller than running full Node.js in production

# Copy built static files from builder stage to Nginx's html directory
COPY --from=builder /app/out /usr/share/nginx/html
# Copies /app/out (created by npm run build with static export)
# Nginx serves these files on HTTP requests
# Using default nginx config (no nginx.conf needed)

EXPOSE 80
# Documents that the container listens on port 80
# Required for port mapping with docker run -p

CMD ["nginx", "-g", "daemon off;"]
# Starts Nginx in foreground mode (required for Docker containers)
# Without 'daemon off;', Nginx would start and exit, stopping the container
# -g 'daemon off;' runs Nginx in the foreground so Docker can manage it
