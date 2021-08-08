const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    signUp: './src/signUp.js',
    about: './src/about.js',
    dm: './src/website.js',
    website: './src/website.js'
  },
  output: {
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/signUp.html',
      inject: true,
      chunks: ['signUp'],
      filename: 'signUp.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/dm.html',
      inject: true,
      chunks: ['dm'],
      filename: 'dm.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/website.html',
      inject: true,
      chunks: ['website'],
      filename: 'website.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/i,
        loader: 'standard-loader',
        options: {
          env: {
            browser: true
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
}
