const config = require('dotenv').config();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const postcssImport = require('postcss-import');
const cssFunctions = require('postcss-functions');
const cssExtend = require('postcss-extend');
const cssNext = require('postcss-cssnext');
const lostGrid = require('lost');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.src,
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-0']
        },
        include: PATHS.src
      },
      {
        test: /\.css$/,
        loaders: ["style", "css", "postcss"]
      }
    ]
  },
  postcss: function(webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack,
      }),
      cssFunctions({
        functions: {
          rem: function(val) {
            return `${val / 16}rem`;
          }
        }
      }),
      cssExtend(),
      cssNext(),
      lostGrid(),
    ];
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: 'body',
      hash: true,
    }),
    new webpack.ProvidePlugin({
      Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'LASTFM_API_KEY': JSON.stringify(process.env.LASTFM_API_KEY),
        'LASTFM_USER': JSON.stringify(process.env.LASTFM_USER),
        'GA_KEY': JSON.stringify(process.env.GA_KEY),
      }
    }),
  ],
};

// Default configuration
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    output: {
      path: PATHS.src,
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.src,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    output:{
      path: PATHS.build,
      filename:'bundle.min.js'
    },
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ]
  });
}
