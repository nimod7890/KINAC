/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://nimod7890.github.io/KINAC"
      : "",
  trailingSlash: true
};

module.exports = nextConfig;
