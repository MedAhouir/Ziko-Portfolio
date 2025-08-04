import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ignoreBuildErrors: true,
  rules: {
    "react/no-unescaped-entities": "off"
  }
};

export default nextConfig;
