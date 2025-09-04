/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;
