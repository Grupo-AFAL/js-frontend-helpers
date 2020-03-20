const path = require('path')

module.exports = ['source-map'].map(devtool => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'frontend-helpers.js',
    library: 'frontendHelpers',
    libraryTarget: 'umd'
  },
  devtool,
  optimization: {
    runtimeChunk: true
  },
  externals: {
    stimulus: {
      commonjs: 'stimulus',
      commonjs2: 'stimulus',
      amd: 'stimulus',
      root: '_'
    }
  }
}))
