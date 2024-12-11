import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // experimental: {
  //   appDir: true, // App Router 활성화
  // },
  compiler: {
    styledComponents: true, // SWC에서 Styled Components 활성화
  },
};

export default nextConfig;

module.exports = nextConfig;
