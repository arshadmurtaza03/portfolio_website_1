# 🚀 Dockerized Portfolio Website

This project containerizes my Next.js portfolio website using Docker with a multi-stage build for optimal image size and production performance.

## 📁 Project Structure

```
portfolio_website_1/
├── Dockerfile              # Multi-stage Docker build
├── package.json           # Node.js dependencies
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── GithubStats.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── portfolioData.ts   # Portfolio content
```

---

## 🐳 Dockerfile Explanation

### Stage 1: Builder (Node.js)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
```

**Explanation:** Uses Node.js 20 Alpine to build the Next.js app. Creates next.config.mjs dynamically with `output: 'export'` for static export.

### Stage 2: Runtime (Nginx)

```dockerfile
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Explanation:** Uses Nginx Alpine to serve the static files from /app/out.

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
- `--name` - Container name
- `-p 8080:80` - Map port 8080 to container port 80

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
