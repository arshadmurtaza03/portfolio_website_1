# Modern AI Engineer Portfolio Website

A modern, responsive, production-ready portfolio website built for **Arshad Murtaza** (AI Engineer & Machine Learning Specialist) using **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed for deployment via **Docker** (Nginx) or **Vercel's Free Plan**, featuring dark mode by default, glassmorphic card designs, dynamic GitHub repository showcases, interactive skill filters, Formspree contact form, and SEO optimization.

---

## 🚀 Key Features

- **Hero Section**: High-impact introduction, interactive CTAs (Download Resume, Contact, GitHub, LinkedIn), and custom avatar badge.
- **About Me**: Career summary, IIT Delhi education highlight, philosophy, and key career objectives.
- **Skills Showcase**: Categorized tech stack (Generative AI & RAG, Machine Learning, Deep Learning, MLOps & Cloud, Backend & APIs, Tools) with interactive filter tabs.
- **Featured Projects**: Filterable project gallery extracted directly from GitHub (Document Portal, Plant Disease CNN, Customer Segmentation, Fraud Detection, Breast Cancer NN).
- **Work & Project Timeline**: Experience timeline showcasing AI engineering implementations, Docker containerization, and AWS ECS deployments.
- **Education & Certifications**: IIT Delhi degree details and verified AI/ML certification badges.
- **GitHub Stats & Activity**: Dynamic cards for commit stats, language breakdown, and streak metrics.
- **Contact Form**: Functional Formspree contact form integration with input validation and status messages.
- **SEO & Performance**: Open Graph tags, automated `sitemap.xml`, `robots.txt`, and Google Fonts optimization.

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS + Custom Glassmorphism Utilities |
| **Animations** | Framer Motion |
| **Icons** | Lucide React & React Icons |
| **Containerization** | Docker (Nginx Alpine) |
| **Deployment** | Docker / Vercel (Zero-config) |

---

## 📂 Project Structure

```
portfolio_website_1/
├── app/
│   ├── layout.tsx              # Root layout with fonts & metadata
│   ├── page.tsx                # Main single-page portfolio layout
│   ├── globals.css             # Tailwind directives & glassmorphism styles
│   ├── robots.ts               # Automated robots.txt
│   └── sitemap.ts              # Automated sitemap.xml
├── components/
│   ├── Navbar.tsx              # Glassmorphic header & navigation
│   ├── Hero.tsx                # Hero section with avatar & CTAs
│   ├── About.tsx               # Summary, philosophy & objectives
│   ├── Skills.tsx              # Categorized tech badges & tab filter
│   ├── Projects.tsx            # Filterable GitHub projects grid
│   ├── Experience.tsx          # AI engineering experience timeline
│   ├── Education.tsx           # IIT Delhi education card
│   ├── Certifications.tsx      # Achievements & certification badges
│   ├── GithubStats.tsx         # Live GitHub stats cards
│   ├── Contact.tsx             # Formspree contact form & info
│   └── Footer.tsx              # Footer & back-to-top button
├── data/
│   └── portfolioData.ts        # Single source of truth for resume data
├── public/
│   ├── Arshad_Murtaza_Resume.pdf  # Downloadable resume
│   ├── my_pic2.png             # Profile photo
│   └── favicon.ico             # Site icon
├── Dockerfile                  # Docker image definition (Nginx Alpine)
├── .dockerignore               # Files excluded from Docker build context
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── .env.example
└── README.md
```

---

## 💻 Running Locally (Without Docker)

### Prerequisites

- Node.js 18.17 or later
- npm or pnpm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arshadmurtaza03/portfolio_website_1.git
   cd portfolio_website_1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(Optional)* Add your Formspree ID to `NEXT_PUBLIC_FORMSPREE_KEY`.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐳 Running with Docker

This project uses a **static export + Nginx** Docker architecture. Next.js builds the site into static HTML/CSS/JS files (in the `out/` folder), which are then served by a lightweight **Nginx Alpine** container — no Node.js is needed at runtime. This makes the final container extremely small and fast.

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  BUILD PHASE (on your machine)                              │
│                                                             │
│  npm run build  ──►  out/  (static HTML, CSS, JS, images)   │
│                                                             │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  DOCKER BUILD                                               │
│                                                             │
│  docker build  ──►  Copies out/ into nginx:alpine image     │
│  Image tag: arshad-portfolio:1.0                            │
│                                                             │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│  DOCKER RUN                                                 │
│                                                             │
│  Container (Nginx)  ──►  Serves site on port 80 internally  │
│  Host port 8080     ──►  Maps to container port 80          │
│                                                             │
│  Browser: http://localhost:8080                              │
└─────────────────────────────────────────────────────────────┘
```

### Dockerfile Explained (Line by Line)

Below is the project's `Dockerfile` with an explanation of every instruction:

```dockerfile
# 1. Use the official Nginx image based on Alpine Linux as the base.
#    Alpine is a minimal Linux distribution (~5 MB), keeping the final image very small.
FROM nginx:alpine

# 2. Set the working directory inside the container to Nginx's default HTML root.
#    All subsequent commands (COPY, RUN) will execute relative to this path.
WORKDIR /usr/share/nginx/html

# 3. Remove the default Nginx welcome page and placeholder files.
#    This ensures only our portfolio files are served.
RUN rm -rf ./*

# 4. Copy the statically exported Next.js site (the out/ folder) into the container.
#    The out/ folder is generated by 'npm run build' with output: "export" in next.config.mjs.
COPY out/ .

# 5. Document that the container listens on port 80 at runtime.
#    This is the standard HTTP port used by Nginx.
EXPOSE 80

# 6. Start Nginx in the foreground (not as a background daemon).
#    Docker requires the main process to run in the foreground to keep the container alive.
CMD ["nginx", "-g", "daemon off;"]
```

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- Node.js 18.17+ (for the build step)

### Step 1 — Build the Static Export

Before creating the Docker image, you need to generate the static site files:

```bash
npm install        # install dependencies (if not done already)
npm run build      # generates the out/ directory with static files
```

This runs `next build` with `output: "export"` (configured in `next.config.mjs`), which produces a fully static website in the `out/` folder. The `images.unoptimized: true` setting is also required because Nginx cannot run the Next.js image optimization server.

### Step 2 — Build the Docker Image

Build the Docker image from the project root (where the `Dockerfile` is located):

```bash
docker build -t arshad-portfolio:1.0 .
```

**What this does:**
- `docker build` — Tells Docker to read the `Dockerfile` and build an image from it.
- `-t arshad-portfolio:1.0` — Tags (names) the image as `arshad-portfolio` with version `1.0`. The format is `name:tag`, where the tag is used for versioning.
- `.` — Sets the **build context** to the current directory. Docker sends all files (except those in `.dockerignore`) to the Docker daemon for building.

**Expected output:**
```
[+] Building 3.2s (8/8) FINISHED
 => [1/3] FROM docker.io/library/nginx:alpine
 => [2/3] WORKDIR /usr/share/nginx/html
 => [3/3] COPY out/ .
 => exporting to image
 => => naming to docker.io/library/arshad-portfolio:1.0
```

You can verify the image was created by running:
```bash
docker images
```
You should see `arshad-portfolio` with tag `1.0` listed.

### Step 3 — Run the Container

Start a container from the built image:

```bash
docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0
```

**What each flag does:**

| Flag | Purpose |
|------|---------|
| `docker run` | Creates a **new container** from an image and starts it. |
| `-d` | **Detached mode** — runs the container in the background so your terminal stays free. Without this, the terminal would be locked showing Nginx logs. |
| `--name arshad-portfolio-container` | **Container name** — gives the container a human-readable name (`arshad-portfolio-container`) instead of a random ID like `3f2a7b9c`. Makes it easy to stop/start/remove later. |
| `-p 8080:80` | **Port mapping** — maps port `8080` on your **host machine** to port `80` inside the **container**. Format is `HOST_PORT:CONTAINER_PORT`. Nginx listens on port 80 inside the container, and you access it via port 8080 on your machine. |
| `arshad-portfolio:1.0` | The **image name and tag** to create the container from (built in Step 2). |

### Step 4 — Verify in Browser

Open your browser and navigate to:

```
http://localhost:8080
```

You should see the full portfolio website served from the Docker container.

### Step 5 — Verify the Container is Running

Run the following command to confirm the container is active:

```bash
docker ps
```

**Expected output:**

```
CONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS                  NAMES
a1b2c3d4e5f6   arshad-portfolio:1.0    "nginx -g 'daemon of…"   2 minutes ago    Up 2 minutes    0.0.0.0:8080->80/tcp   arshad-portfolio-container
```

This confirms:
- The container `arshad-portfolio-container` is **Up** and running.
- Port mapping `0.0.0.0:8080->80/tcp` is active (host 8080 → container 80).
- The image used is `arshad-portfolio:1.0`.

### Container Lifecycle — Stop, Start & Restart

**Stop the container** (gracefully shuts down Nginx):

```bash
docker stop arshad-portfolio-container
```
This sends a `SIGTERM` signal to Nginx, allowing it to finish serving any active requests before shutting down. The container moves to a **stopped** state but is **not deleted** — all data is preserved.

**Start a stopped container** (resumes from where it left off):

```bash
docker start arshad-portfolio-container
```
This restarts the same container with the same configuration (port mapping, name, image). No need to re-specify any flags — Docker remembers them. Visit `http://localhost:8080` again to confirm the site is back.

**Restart the container** (stop + start in one command):

```bash
docker restart arshad-portfolio-container
```

### Container Management Commands

```bash
# Check running containers
docker ps

# Check ALL containers (running + stopped)
docker ps -a

# Stop the container
docker stop arshad-portfolio-container

# Start a stopped container
docker start arshad-portfolio-container

# View container logs (Nginx access/error logs)
docker logs arshad-portfolio-container

# Follow logs in real-time (like tail -f, press Ctrl+C to exit)
docker logs -f arshad-portfolio-container

# Remove the container (must be stopped first)
docker stop arshad-portfolio-container
docker rm arshad-portfolio-container

# Remove the container forcefully (even if running)
docker rm -f arshad-portfolio-container
```

### Docker Command Reference

| Command | Description |
|---------|-------------|
| `docker build -t arshad-portfolio:1.0 .` | Builds a Docker image from the `Dockerfile` in the current directory and tags it as `arshad-portfolio` with version `1.0`. |
| `docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0` | Creates and starts a new container in detached mode (`-d`), names it `arshad-portfolio-container`, and maps host port `8080` to container port `80`. |
| `docker ps` | Lists all currently **running** containers with their status, ports, and names. |
| `docker ps -a` | Lists **all** containers (running + stopped). |
| `docker stop arshad-portfolio-container` | Gracefully stops the running container by sending a SIGTERM signal to Nginx. |
| `docker start arshad-portfolio-container` | Restarts a previously stopped container with its original configuration. |
| `docker restart arshad-portfolio-container` | Stops and immediately restarts the container in one command. |
| `docker rm arshad-portfolio-container` | Removes a stopped container. Use `-f` flag to force-remove a running container. |
| `docker logs arshad-portfolio-container` | Shows the stdout/stderr logs from the container. Add `-f` to follow in real-time. |
| `docker images` | Lists all Docker images on your system, including `arshad-portfolio:1.0`. |
| `docker rmi arshad-portfolio:1.0` | Removes the `arshad-portfolio:1.0` image from your system. |

### Restarting After Code Changes

If you make changes to your source code, you need to rebuild both the static export and the Docker image:

```bash
# 1. Rebuild the static site
npm run build

# 2. Remove the old container
docker rm -f arshad-portfolio-container

# 3. Rebuild the Docker image
docker build -t arshad-portfolio:1.0 .

# 4. Run a new container
docker run -d --name arshad-portfolio-container -p 8080:80 arshad-portfolio:1.0

# 5. Verify it's running
docker ps
```

---

## 📦 Building for Production

To test the production build locally (without Docker):

```bash
npm run build
npm run start
```

This starts the Next.js production server at [http://localhost:3000](http://localhost:3000).

> **Note:** `npm run start` requires Node.js and runs the Next.js server. The Docker approach above uses Nginx instead and does **not** require Node.js at runtime.

---

## 🌐 Deployment to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Deploying Next.js portfolio website"
   git push origin main
   ```

2. Import the repository in [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js 15 and deploys it with zero extra configuration.
4. Set environment variable `NEXT_PUBLIC_FORMSPREE_KEY` in Vercel project settings if using Formspree.

---

## 👤 Author

**Arshad Murtaza**
- **Email**: arshadmurtaza2016@gmail.com
- **GitHub**: [@arshadmurtaza03](https://github.com/arshadmurtaza03)
- **LinkedIn**: [in/arshadmurtaza](https://www.linkedin.com/in/arshadmurtaza)
- **Education**: B.Tech, IIT Delhi (2019 - 2023)
