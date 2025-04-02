import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tonu-dark.netlify.app/static/media',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
