const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const path = require("path");

const base = {
  env: { MONGODB: process.env.MONGODB },
  sassOptions: { includePaths: [path.join(__dirname, "styles")] },
};

const withPwaConfig = withPWA({
  ...base,
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
});

module.exports =
  process.env.NODE_ENV === "development" ? base : withPwaConfig;
