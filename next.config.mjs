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