const path = require('path')

module.exports = {
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))

    return config
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

}