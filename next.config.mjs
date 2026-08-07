/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Create a static production website in the "out" folder.
  output: "export",

  images: {
    // Required for static export because Nginx cannot run Next.js image optimization.
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
      },
    ],
  },
};

export default nextConfig;