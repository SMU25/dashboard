import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  middleware: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reqres.in",
      },
    ],
  },
};

export default nextConfig;
