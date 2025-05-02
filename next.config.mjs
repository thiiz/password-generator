/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  
  // Configure additional settings as needed:
  // images: { unoptimized: true }, // If you're using static export
  // experimental: { appDir: true }, // Enable App Router (already default in Next.js 13+)
}

export default nextConfig;
