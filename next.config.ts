import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/portfolio", destination: "/software", permanent: true },
      { source: "/projects", destination: "/software#projects", permanent: false },
      { source: "/journey", destination: "/software#experience", permanent: false },
      { source: "/research", destination: "/software#leadership", permanent: false },
      { source: "/leadership", destination: "/software#leadership", permanent: false },
      { source: "/contact", destination: "/software#contact", permanent: false },
    ];
  },
};

export default nextConfig;
