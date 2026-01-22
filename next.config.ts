import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Required for GitHub Pages project site (ucsb-caliber.github.io/website)
  basePath: '/website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
