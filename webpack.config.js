'use strict';

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const copy = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'frontend', 'dist');
// const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'frontend', 'src');
const BACKEND_DIR = path.resolve(__dirname, 'backend', 'static');

const config = {
  // the entry file for the bundle
  entry: {
		app: [APP_DIR + '/app.jsx'],
		vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
	},

  // the bundle file we will get in the result
  output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [
      {
        test: /\.jsx?$/,
				exclude : [/node_modules/, /bower_components/],
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?-url', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?-url', 'postcss-loader']
      }
    ],
  },

	plugins: [
	    new copy([
	        {from: BACKEND_DIR, to: BUILD_DIR + '/html/'},
	        {from: APP_DIR + '/assets/', to: BUILD_DIR + '/assets/'}
	    ], {
	        copyUnmodified: false,
	        debug: 'debug'
	    }),

	    new webpack.optimize.CommonsChunkPlugin({
	        name: 'vendor',
	        minChunks: Infinity,
	        filename: 'vendor.bundle.js'
	    })
	],

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};

module.exports = config;
