# 🎥 Docker Verification Guide for Video Submission

## 📋 Step-by-Step Commands to Record

### Step 1: Show Project Structure

```bash
cd portfolio_website_1
ls -la
```

**What to show:**
- Dockerfile
- next.config.mjs
- nginx.conf
- package.json
- package-lock.json
- .dockerignore
- app/ directory
- components/ directory

---

### Step 2: Show Key Files

```bash
cat next.config.mjs
```

**Explain:** "This file has `output: 'export'` which creates static HTML files in /app/out directory"

```bash
cat Dockerfile
```

**Explain:** "Multi-stage build: Stage 1 builds with Node.js, Stage 2 serves with Nginx for smaller image size"

---

### Step 3: Build the Docker Image

```bash
docker build -t arshad-portfolio:1.0 .
```

**What to look for:**
- ✅ `Step 1/12 : FROM node:20-alpine AS builder`
- ✅ `npm ci` completes without errors
- ✅ `npm run build` creates `/app/out` directory
- ✅ Final: `naming to docker.io/library/arshad-portfolio:1.0`

**Explain:** "This builds the Docker image. The -t flag tags it with name and version. The dot means current directory."

---

### Step 4: Run the Container

```bash
docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0
```

**Expected output:** Container ID (e.g., `a1b2c3d4e5f6`)

**Explain:** "-d runs in background, --name gives it a name, -p maps host port 8080 to container port 80"

---

### Step 5: Verify Container is Running

```bash
docker ps
```

**Expected output:**
```
CONTAINER ID   IMAGE                      COMMAND                  STATUS         PORTS                  NAMES
a1b2c3d4e5f6   arshad-portfolio:1.0       "nginx -g 'daemon of…"   Up 10 seconds  0.0.0.0:8080->80/tcp   arshad-portfolio-container
```

**Explain:** "docker ps shows all running containers. We can see our container is up and port 8080 is mapped to port 80"

---

### Step 6: Access in Browser

Open: **http://localhost:8080**

**What to show:**
- Portfolio loads successfully
- Scroll through sections: Hero, About, Skills, Projects, Experience, Education, Certifications, Contact
- Show it's working perfectly

**Explain:** "The website is now running inside a Docker container, served by Nginx on port 8080"

---

### Step 7: Demonstrate Container Management

```bash
# Stop the container
docker stop arshad-portfolio-container

# Show it's stopped (won't appear in docker ps)
docker ps

# Show all containers including stopped
docker ps -a

# Start it again
docker start arshad-portfolio-container

# Verify it's running
docker ps

# Restart it
docker restart arshad-portfolio-container
```

**Explain each command:**
- `docker stop` - Gracefully stops the container
- `docker ps -a` - Shows all containers including stopped ones
- `docker start` - Starts a stopped container
- `docker restart` - Stops and starts in one command

---

### Step 8: Show Additional Commands

```bash
# View container logs
docker logs arshad-portfolio-container

# List all Docker images
docker images

# Show port mapping
docker port arshad-portfolio-container
```

**Explain:**
- `docker logs` - Shows container output for debugging
- `docker images` - Lists all Docker images on your system
- `docker port` - Shows port mappings

---

## 🎯 Video Script Outline

### Introduction (30 seconds)
"Hi, I'm showing my Dockerized portfolio website. This is a Next.js application that I've containerized using a multi-stage Docker build for optimal performance."

### Project Overview (1 minute)
- Show project structure
- Explain key files: Dockerfile, next.config.mjs, nginx.conf
- Mention static export creates /app/out directory

### Build Process (1 minute)
- Run `docker build` command
- Explain what's happening: Node builder stage, npm ci, npm run build
- Show successful build completion

### Run Container (1 minute)
- Run `docker run` command
- Explain flags: -d, --name, -p
- Show `docker ps` output
- Open browser to http://localhost:8080

### Container Management (1 minute)
- Demonstrate stop, start, restart
- Show `docker ps -a` to see stopped containers
- Explain each command's purpose

### Conclusion (30 seconds)
"As you can see, the portfolio runs successfully in a Docker container with Nginx serving the static files. All Docker commands work as expected."

---

## ✅ Marks Checklist

| Requirement | Marks | Evidence in Video |
|-------------|-------|-------------------|
| Project structure shown | 3/3 | `ls -la` output |
| Dockerfile explained | 7/7 | Show file + explain each stage |
| Image build works | 5/5 | `docker build` successful output |
| Container runs website | 5/5 | `docker ps` + browser at localhost:8080 |
| Stop/restart covered | 2/2 | Demonstrate all commands |
| Commands explained | 3/3 | Explain each flag and purpose |
| **Total** | **25/25** | ✅ |

---

## 🔧 Common Issues & Quick Fixes

### Issue: "package-lock.json not found"
**Fix:** Already committed to repo - shouldn't happen

### Issue: Build fails at `npm run build`
**Fix:** Check `next.config.mjs` has `output: 'export'`

### Issue: Port 8080 already in use
**Fix:** Use different port: `-p 8081:80` or `-p 3000:80`

### Issue: Container exits immediately
**Fix:** Check logs: `docker logs arshad-portfolio-container`

### Issue: White page in browser
**Fix:** 
1. Check logs for errors
2. Verify nginx.conf is correct
3. Ensure images use `/images/` not Next.js Image component

---

## 📤 Submission Links

**GitHub Repository:** https://github.com/arshadmurtaza03/portfolio_website_1

**Direct Link to Code:** https://github.com/arshadmurtaza03/portfolio_website_1

**Video:** [Your unlisted YouTube/video link here]

---

## 🎯 Expected Result: 25/25 Marks

All grader requirements addressed:
- ✅ package-lock.json exists (npm ci works)
- ✅ next.config.mjs with `output: 'export'` (creates /app/out)
- ✅ Dockerfile with multi-stage build and explanations
- ✅ README.md with ALL commands explained
- ✅ Build evidence with expected outputs
- ✅ Container management commands documented
- ✅ Verification checklist for video

**You should easily get 19+ marks, likely full 25/25!** 🚀
