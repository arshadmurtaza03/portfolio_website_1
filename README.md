# Modern AI Engineer Portfolio Website

A modern, responsive, production-ready portfolio website built for **Arshad Murtaza** (AI Engineer & Machine Learning Specialist) using **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed for deployment on **Vercel's Free Plan**, featuring dark mode by default, glassmorphic card designs, dynamic GitHub repository showcases, interactive skill filters, Formspree contact form, and SEO optimization.

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

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS + Custom Glassmorphism Utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Deployment**: Vercel (Zero-config)

---

## 📂 Project Structure

```
portfolio_website/
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
│   ├── Projects.tsx           # Filterable GitHub projects grid
│   ├── Experience.tsx         # AI engineering experience timeline
│   ├── Education.tsx          # IIT Delhi education card
│   ├── Certifications.tsx     # Achievements & certification badges
│   ├── GithubStats.tsx        # Live GitHub stats cards
│   ├── Contact.tsx            # Formspree contact form & info
│   └── Footer.tsx             # Footer & back-to-top button
├── data/
│   └── portfolioData.ts        # Single source of truth for resume data
├── public/
│   ├── Arshad_Murtaza_Resume.pdf  # Downloadable resume
│   ├── my_pic2.png             # Profile photo
│   └── favicon.ico             # Site icon
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── .env.example
└── README.md
```

---

## 💻 Running Locally

### Prerequisites

- Node.js 18.17 or later
- npm or pnpm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arshadmurtaza03/portfolio_website.git
   cd portfolio_website
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

## 📦 Building for Production

To test the production build locally:

```bash
npm run build
npm run start
```

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
