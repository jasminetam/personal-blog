const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching: require("next-pwa/cache"),
  disable: process.env.NODE_ENV === "development"
});

const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  }
};

module.exports = withPWA(nextConfig);
