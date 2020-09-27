const { transformWebpackConfig } = require('@rescripts/utilities')

module.exports = {
  webpack: config => {
    config.performance = { hints: 'warning' }
    config.stats = 'errors-only'
    config.devtool = 'source-map'
    config.optimization.sideEffects = false
    return config
  },
}
