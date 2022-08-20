const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const settings = {
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  env: {
    MONGODB: process.env.MONGODB,
  }
}

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);