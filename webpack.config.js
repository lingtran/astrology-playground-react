const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    main: PATHS.app + '/index.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.jsx?$/, exclude: '/node_modules/', loader: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      title: 'Astrology Playground React',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['.scss', '.css', '.js', '.json', '.jsx']
  }
}
