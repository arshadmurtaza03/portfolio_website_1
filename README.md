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

This project uses a **static export + Nginx** Docker architecture. Next.js builds the site into static HTML/CSS/JS files (in the `out/` folder), which are then served by a lightweight **Nginx Alpine** container — no Node.js is needed at runtime.

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

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- Node.js 18.17+ (for the build step)

### Step 1 — Build the Static Export

Before creating the Docker image, you need to generate the static site files:

```bash
npm install        # install dependencies (if not done already)
npm run build      # generates the out/ directory with static files
```

This runs `next build` with `output: "export"` (configured in `next.config.mjs`), which produces a fully static website in the `out/` folder.

### Step 2 — Build the Docker Image

Build the Docker image from the project root (where the `Dockerfile` is located):

```bash
docker build -t portfolio-website .
```

**What this does:**
- `docker build` — Tells Docker to build an image from a Dockerfile.
- `-t portfolio-website` — Tags (names) the image as `portfolio-website` so you can reference it easily.
- `.` — Sets the build context to the current directory (Docker will look for the `Dockerfile` here).

**What the Dockerfile does internally:**
1. Starts from the `nginx:alpine` base image (a lightweight ~5 MB web server).
2. Sets the working directory to `/usr/share/nginx/html` (Nginx's default HTML root).
3. Removes any default Nginx placeholder files.
4. Copies the `out/` folder contents (your static site) into the Nginx HTML directory.
5. Exposes port `80` for HTTP traffic.
6. Starts Nginx in the foreground with `daemon off`.

### Step 3 — Run the Container

Start a container from the built image:

```bash
docker run -d -p 8080:80 --name portfolio portfolio-website
```

**What each flag does:**
| Flag | Purpose |
|------|---------|
| `-d` | **Detached mode** — runs the container in the background so your terminal stays free. |
| `-p 8080:80` | **Port mapping** — maps port `8080` on your host machine to port `80` inside the container. You can change `8080` to any available port. |
| `--name portfolio` | **Container name** — gives the container a human-readable name (`portfolio`) instead of a random ID. |
| `portfolio-website` | The **image name** to create the container from (the one you built in Step 2). |

### Step 4 — Verify in Browser

Open your browser and navigate to:

```
http://localhost:8080
```

You should see the full portfolio website served from the Docker container.

### Container Management Commands

Once your container is running, use these commands to manage it:

```bash
# Check running containers
docker ps

# Stop the container (gracefully shuts down Nginx)
docker stop portfolio

# Start a stopped container (resumes where it left off)
docker start portfolio

# View container logs (Nginx access/error logs)
docker logs portfolio

# Follow logs in real-time (like tail -f)
docker logs -f portfolio

# Remove the container (must be stopped first)
docker stop portfolio
docker rm portfolio

# Remove the container forcefully (even if running)
docker rm -f portfolio
```

### Docker Command Reference

| Command | Description |
|---------|-------------|
| `docker build -t portfolio-website .` | Builds a Docker image from the `Dockerfile` in the current directory and tags it as `portfolio-website`. |
| `docker run -d -p 8080:80 --name portfolio portfolio-website` | Creates and starts a new container in detached mode, mapping host port `8080` to container port `80`. |
| `docker ps` | Lists all currently **running** containers with their status, ports, and names. |
| `docker ps -a` | Lists **all** containers (running + stopped). |
| `docker stop portfolio` | Gracefully stops the running container named `portfolio`. |
| `docker start portfolio` | Restarts a previously stopped container named `portfolio`. |
| `docker rm portfolio` | Removes a stopped container. Use `-f` flag to force-remove a running container. |
| `docker logs portfolio` | Shows the stdout/stderr logs from the container. Add `-f` to follow in real-time. |
| `docker images` | Lists all Docker images on your system, including `portfolio-website`. |
| `docker rmi portfolio-website` | Removes the `portfolio-website` image from your system. |

### Restarting After Code Changes

If you make changes to your source code, you need to rebuild both the static export and the Docker image:

```bash
# 1. Rebuild the static site
npm run build

# 2. Remove the old container
docker rm -f portfolio

# 3. Rebuild the Docker image
docker build -t portfolio-website .

# 4. Run a new container
docker run -d -p 8080:80 --name portfolio portfolio-website
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
