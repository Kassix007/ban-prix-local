import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Proxy /api requests to Flask backend in dev
  async rewrites() {
    return [
      {
        source: '/api/:path*',                      // frontend URL
        destination: process.env.NEXT_PUBLIC_API_URL + '/api/:path*' // Flask backend
      }
    ];
  }
};

export default nextConfig;
