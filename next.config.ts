import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚠️ This allows production builds to successfully complete
    // even if there are ESLint errors in your code.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
