// next.config.js

const prefix = process.env.NODE_ENV === 'production' ? '/miseckill' : ''

module.exports = {
  assetPrefix: prefix,
  selfConfig: { prefix },
}
