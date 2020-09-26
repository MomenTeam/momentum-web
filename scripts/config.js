const { transformWebpackConfig } = require('@rescripts/utilities')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()

module.exports = {
  webpack: config => {
    config.performance = { hints: 'warning' }
    config.stats = 'errors-only'
    return config
  },
}
