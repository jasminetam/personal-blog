const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const path = require("path");

const settings = {
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  env: {
    MONGODB: process.env.MONGODB,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
