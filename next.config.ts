import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // SWC에서 Styled Components 활성화
  },
};

export default nextConfig;

module.exports = nextConfig;
