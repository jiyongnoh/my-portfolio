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
  // images: {
  //   domains: ["d3geuk0zfwtrgs.cloudfront.net"], // 외부 도메인을 사용하는 경우 추가
  // },
};

export default nextConfig;

module.exports = nextConfig;
