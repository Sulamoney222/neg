// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ⚠️ Warning: This ignores ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
