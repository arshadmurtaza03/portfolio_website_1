# =============================================================================
# Multi-stage Dockerfile for Next.js Portfolio with Static Export
# =============================================================================
# This Dockerfile creates an optimized production image by:
# 1. Building the Next.js app in a Node.js environment
# 2. Serving the static output with lightweight Nginx
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

COPY package.json package-lock.json ./
# Copies only package files first for better Docker layer caching
# If dependencies don't change, this layer is cached on rebuilds

RUN npm ci
# Installs all dependencies from package-lock.json (clean install)
# Faster and more reliable than npm install for CI/CD
# Requires package-lock.json to exist

COPY . .
# Copies all source files (app, components, config, etc.) to the container
# .dockerignore excludes unnecessary files (node_modules, .git, etc.)

RUN npm run build
# Builds the Next.js application
# With output: 'export' in next.config.mjs, this creates /app/out directory
# Contains static HTML, CSS, JS files ready for deployment

# -----------------------------------------------------------------------------
# STAGE 2: RUNTIME - Serve with Nginx
# -----------------------------------------------------------------------------
FROM nginx:alpine
# Uses Nginx with Alpine Linux (~25MB) as lightweight production web server
# Much smaller than running full Node.js in production

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copies custom Nginx configuration
# Handles Next.js static routing (all routes serve index.html)
# Enables gzip compression and static asset caching

COPY --from=builder /app/out /usr/share/nginx/html
# Copies built static files from builder stage to Nginx's html directory
# /app/out contains the production-ready static website
# Nginx serves these files on HTTP requests

EXPOSE 80
# Documents that the container listens on port 80
# Required for port mapping with docker run -p

CMD ["nginx", "-g", "daemon off;"]
# Starts Nginx in foreground mode (required for Docker containers)
# Without 'daemon off;', Nginx would start and exit, stopping the container
# -g 'daemon off;' runs Nginx in the foreground so Docker can manage it
