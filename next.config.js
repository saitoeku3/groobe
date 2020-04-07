const withImages = require('next-images')
const path = require('path')

module.exports = withImages({
  env: {
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    IS_DEV: process.env.NODE_ENV !== 'production',
    DOMAIN:
    (process.env.NODE_ENV !== 'production'
      ? process.env.DOMAIN_DEVELOPMENT
      : process.env.DOMAIN_PRODUCTION) || ''
  },
  esModule: true,
  webpack(config, options) {
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  }
})
