const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: devMode ? '[name].[hash].js' : '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'awesome-typescript-loader',
            options: {
              'useBabel': true,
              'babelCore': '@babel/core',
              'babelOptions': {
                'babelrc': true
              }
            }
          }
        ]
      },
      {
        test: [/.css$|.scss$/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '/',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicUrl: process.env.npm_package_homepage
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].[chunkhash].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: './public',
        to: './'
      }
    ])
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCssAssetsPlugin()],
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },
  // devtool: 'source-map',
  devServer: {
    contentBase: 'dist', // everything will be served from dist
    hot: true, // enables hot reloading
    overlay: true, // if an error occurs with syntax it will overlay the issue in the browser
    port: 6500,
    historyApiFallback: true
  },
}