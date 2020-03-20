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
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
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
