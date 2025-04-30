import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during `next build`
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ optional: ignore TypeScript errors too
  },
};

export default nextConfig;
