# 🚀 Dockerized Portfolio Website

This project containerizes my Next.js portfolio website using Docker with a multi-stage build for optimal image size and production performance.

## 📁 Project Structure

```
portfolio_website_1/
├── Dockerfile              # Multi-stage Docker build
├── package.json           # Node.js dependencies
├── package-lock.json      # Lockfile for reproducible builds
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   └── ... (other components)
└── data/
    └── portfolioData.ts   # Portfolio content data
```

---

## 🐳 Dockerfile Explanation

### Stage 1: Builder (Node.js)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
```

**Explanation:**
- `FROM node:20-alpine` - Uses Node.js 20 with Alpine Linux
- `WORKDIR /app` - Sets working directory
- `COPY package.json package-lock.json ./` - Copies package files for caching
- `RUN npm ci` - Installs dependencies from lockfile (reproducible)
- `COPY . .` - Copies all source files
- `RUN npm run build` - Builds Next.js with static export

### Stage 2: Runtime (Nginx)

```dockerfile
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Explanation:**
- `FROM nginx:alpine` - Uses lightweight Nginx server
- `COPY --from=builder /app/out` - Copies static files from build stage
- `EXPOSE 80` - Documents port 80
- `CMD [...]` - Starts Nginx in foreground mode

---

## 🔨 Build and Run Commands

### Build the Docker Image

```bash
docker build -t arshad-portfolio:1.0 .
```

**Explanation:**
- `docker build` - Creates Docker image
- `-t arshad-portfolio:1.0` - Tags with name and version
- `.` - Uses current directory

### Run the Container

```bash
docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0
```

**Explanation:**
- `-d` - Detached mode (background)
- `--name arshad-portfolio-container` - Container name
- `-p 8080:80` - Map host port 8080 to container port 80

### Verify Container is Running

```bash
docker ps
```

**Expected Output:**
```
CONTAINER ID   IMAGE                      COMMAND                  STATUS         PORTS                  NAMES
a1b2c3d4e5f6   arshad-portfolio:1.0       "nginx -g 'daemon of…"   Up 30 seconds  0.0.0.0:8080->80/tcp   arshad-portfolio-container
```

### Access Website

Open browser to: **http://localhost:8080**

---

## 🎛️ Container Management

### Stop Container

```bash
docker stop arshad-portfolio-container
```

**Explanation:** Gracefully stops the running container.

### Start Container

```bash
docker start arshad-portfolio-container
```

**Explanation:** Starts a stopped container.

### Restart Container

```bash
docker restart arshad-portfolio-container
```

**Explanation:** Stops and starts the container.

### List All Containers

```bash
docker ps -a
```

**Explanation:** Lists all containers (running and stopped).

---

## ✅ Verification

1. Build: `docker build -t arshad-portfolio:1.0 .`
2. Run: `docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0`
3. Check: `docker ps`
4. Open: http://localhost:8080

---

**GitHub:** https://github.com/arshadmurtaza03/portfolio_website_1
