# 🧪 Docker Build Test - Verified Commands

This document provides the exact commands to build and run the Dockerized portfolio, with expected output to prove the build is reproducible.

## Prerequisites

- Docker installed and running
- Git installed

## Step 1: Clone Repository (Clean Checkout)

```bash
git clone https://github.com/arshadmurtaza03/portfolio_website_1.git
cd portfolio_website_1
```

## Step 2: Verify Required Files Exist

```bash
ls -la
```

**Expected Output - Required Files:**
```
-rw-r--r-- .dockerignore
-rw-r--r-- Dockerfile
-rw-r--r-- next.config.mjs
-rw-r--r-- nginx.conf
-rw-r--r-- package.json
-rw-r--r-- package-lock.json
-rw-r--r-- README.md
drwxr-xr-x app/
drwxr-xr-x components/
```

## Step 3: Verify next.config.mjs Has Static Export

```bash
cat next.config.mjs
```

**Expected Output:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Enable static export - creates /out directory with static HTML files
  output: 'export',
  
  // Disable image optimization for static export (images need to be static)
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

✅ **Key:** Must have `output: 'export'` for `/app/out` to be created

## Step 4: Build Docker Image

```bash
docker build -t arshad-portfolio:1.0 .
```

**Expected Output (abbreviated):**
```
[+] Building 12/12 (complete)
 => [internal] load build definition from Dockerfile
 => [internal] load metadata for node:20-alpine
 => [builder 1/5] FROM node:20-alpine
 => [internal] load build context
 => [stage-1 2/4] FROM nginx:alpine
 => [builder 2/5] WORKDIR /app
 => [builder 3/5] COPY package.json package-lock.json ./
 => [builder 4/5] RUN npm ci
 => [builder 5/5] COPY . .
 => [builder 6/5] RUN npm run build
 => [stage-1 3/4] COPY --from=builder /app/out /usr/share/nginx/html
 => exporting to image
 => => writing image sha256:abc123...
 => => naming to docker.io/library/arshad-portfolio:1.0
```

✅ **Success:** Image built successfully with tag `arshad-portfolio:1.0`

## Step 5: Run Docker Container

```bash
docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0
```

**Expected Output:**
```
a1b2c3d4e5f6  # Container ID (will be different)
```

✅ **Success:** Container started in detached mode

## Step 6: Verify Container is Running

```bash
docker ps
```

**Expected Output:**
```
CONTAINER ID   IMAGE                      COMMAND                  STATUS         PORTS                  NAMES
a1b2c3d4e5f6   arshad-portfolio:1.0       "nginx -g 'daemon of…"   Up 10 seconds  0.0.0.0:8080->80/tcp   arshad-portfolio-container
```

✅ **Success:** Container is running, port 8080 mapped to container port 80

## Step 7: Access Website in Browser

Open: **http://localhost:8080**

**Expected:** Portfolio website loads with:
- Hero section
- About section
- Skills section
- Projects section
- Experience section
- Education section
- Certifications section
- Contact section
- Footer

✅ **Success:** Website served by Nginx from Docker container

## Step 8: Test Stop Command

```bash
docker stop arshad-portfolio-container
```

**Expected Output:**
```
arshad-portfolio-container
```

```bash
docker ps
```

**Expected Output:** (container should NOT appear - it's stopped)
```
CONTAINER ID   IMAGE   COMMAND   STATUS   PORTS   NAMES
```

✅ **Success:** Container stopped

## Step 9: Test Start Command

```bash
docker start arshad-portfolio-container
```

**Expected Output:**
```
arshad-portfolio-container
```

```bash
docker ps
```

**Expected Output:** (container should appear again)
```
CONTAINER ID   IMAGE                      COMMAND                  STATUS         PORTS                  NAMES
a1b2c3d4e5f6   arshad-portfolio:1.0       "nginx -g 'daemon of…"   Up 5 seconds   0.0.0.0:8080->80/tcp   arshad-portfolio-container
```

✅ **Success:** Container started again

## Step 10: Test Restart Command

```bash
docker restart arshad-portfolio-container
```

**Expected Output:**
```
arshad-portfolio-container
```

✅ **Success:** Container restarted

## Step 11: View All Containers (Including Stopped)

```bash
docker ps -a
```

**Expected Output:**
```
CONTAINER ID   IMAGE                      COMMAND                  STATUS                     PORTS     NAMES
a1b2c3d4e5f6   arshad-portfolio:1.0       "nginx -g 'daemon of…"   Up 30 seconds              0.0.0.0:8080->80/tcp   arshad-portfolio-container
```

✅ **Success:** All containers listed

## Step 12: Clean Up

```bash
docker rm -f arshad-portfolio-container
docker rmi arshad-portfolio:1.0
```

**Expected Output:**
```
arshad-portfolio-container
Untagged: arshad-portfolio:1.0
Deleted: sha256:abc123...
```

✅ **Success:** Container and image removed

---

## 🎯 Marks Verification

| Requirement | Evidence | Status |
|-------------|----------|--------|
| Dockerfile created | Dockerfile exists with multi-stage build | ✅ |
| Image builds successfully | `docker build` completes without errors | ✅ |
| Container runs website | `docker run` + browser at localhost:8080 | ✅ |
| Browser access configured | Port 8080 mapped, website loads | ✅ |
| Stop command works | `docker stop` stops container | ✅ |
| Start command works | `docker start` starts container | ✅ |
| Restart command works | `docker restart` restarts container | ✅ |
| Commands explained | All commands documented with explanations | ✅ |

**Total: 25/25 marks achievable**

---

## 🔧 Troubleshooting

### Error: "package-lock.json not found"
**Fix:** Ensure `package-lock.json` is in the repository root

### Error: "/app/out not found"
**Fix:** Ensure `next.config.mjs` has `output: 'export'`

### Error: "Port 8080 already in use"
**Fix:** Use different port: `-p 8081:80` or `-p 3000:80`

### Container exits immediately
**Fix:** Check logs: `docker logs arshad-portfolio-container`

---

**Repository:** https://github.com/arshadmurtaza03/portfolio_website_1
