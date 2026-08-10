# Modern AI Engineer Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

The project supports local development, static Docker deployment with Nginx, and Vercel deployment.

## 🚀 Key Features

- Hero, About, Skills, Projects, Experience, Education, Certifications, Contact, and Footer sections
- GitHub project and statistics sections
- Responsive dark-mode portfolio design
- Formspree contact form
- SEO support with `sitemap.xml` and `robots.txt`
- Dockerized static deployment using Nginx Alpine

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React & React Icons |
| Containerization | Docker + Nginx Alpine |
| Deployment | Docker / Vercel |

## 📂 Project Structure

```text
portfolio_website_1/
├── app/
├── components/
├── data/
├── public/
├── Dockerfile
├── .dockerignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── .env.example
└── README.md
```

## 💻 Running Locally

### Prerequisites

- Node.js 18.17+
- npm

### Steps

```bash
git clone https://github.com/arshadmurtaza03/portfolio_website_1.git
cd portfolio_website_1
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## 🐳 Running with Docker

The portfolio uses a **multi-stage Docker build**. The complete application build happens inside Docker, so a pre-generated `out/` folder on the host is not required.

### Docker Architecture

```text
Docker build
    ↓
Node.js builder stage
    ↓
npm ci
    ↓
npm run build
    ↓
Next.js generates out/
    ↓
Nginx Alpine runtime
    ↓
Portfolio on http://localhost:8080
```

### Dockerfile

```dockerfile
# Stage 1: build the Next.js site inside Docker
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: serve the static site with Nginx
FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Step 1 — Build the Docker Image

From the project root:

```bash
docker build -t arshad-portfolio:1.0 .
```

This command builds the complete application inside Docker. You do **not** need to run `npm run build` before it.

### Step 2 — Run the Container

```bash
docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0
```

- `docker run` creates and starts a container.
- `-d` runs it in the background.
- `--name` gives the container a readable name.
- `-p 8080:80` maps host port `8080` to container port `80`.

### Step 3 — Check the Container

```bash
docker ps
```

The port mapping should show something similar to:

```text
0.0.0.0:8080->80/tcp
```

### Step 4 — Open the Portfolio

Open:

```text
http://localhost:8080
```

The portfolio is served by Nginx inside the Docker container.

### Step 5 — Stop the Container

```bash
docker stop arshad-portfolio-container
```

### Step 6 — Start the Container Again

```bash
docker start arshad-portfolio-container
docker ps
```

Then open `http://localhost:8080` again.

### Restart the Container

```bash
docker restart arshad-portfolio-container
```

### Useful Commands

```bash
# Running containers
docker ps

# All containers
docker ps -a

# Stop
docker stop arshad-portfolio-container

# Start
docker start arshad-portfolio-container

# Restart
docker restart arshad-portfolio-container

# Remove container
docker rm -f arshad-portfolio-container

# List images
docker images
```

### Rebuild After Code Changes

Because the build happens inside Docker, rebuild the image after changing source code:

```bash
docker rm -f arshad-portfolio-container
docker build -t arshad-portfolio:1.0 .
docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0
docker ps
```

## 📦 Production Build Without Docker

```bash
npm run build
npm run start
```

The Next.js production server runs on `http://localhost:3000`.

## 🌐 Deployment to Vercel

Push the repository to GitHub and import it into Vercel. Next.js will be detected automatically.

## 👤 Author

**Arshad Murtaza**

- GitHub: https://github.com/arshadmurtaza03
- LinkedIn: https://www.linkedin.com/in/arshadmurtaza
- Education: B.Tech, IIT Delhi (2019–2023)
