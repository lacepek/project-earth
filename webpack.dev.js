const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modulesDir = resolve(__dirname, 'node_modules');

module.exports = {
  mode: 'development',
  entry: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './src/index.ts'],
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.jpg']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: modulesDir,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.css$/, exclude: modulesDir, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, exclude: modulesDir, use: ['file-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/assets/template.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '/build'),
    publicPath: '/'
  }
};
