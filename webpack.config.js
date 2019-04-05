var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader');
var ROOT = path.resolve(__dirname);

var entry = {
  background: [
    ROOT + '/src/background/index.ts'
  ],
  'popup/index': [
    ROOT + '/src/popup/index.tsx'
  ]
}
const MODE = process.env.MODE;
const plugins = [];
const config = {
  entry: entry,
  output: {
    path: ROOT + '/chrome',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        loader: [
          "awesome-typescript-loader"
        ]
      },
      {
        enforce: "pre",
        test: /\.ts[x]$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        include: ROOT + '/src',
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024*20
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '@': ROOT + '/src'
    }
  },
}

if (MODE === "production") {
  config.plugins = [
    new CheckerPlugin(),
    ...plugins
  ];
}

if (MODE === "development") {
  config.devtool = 'inline-source-map';
  config.plugins = [
    new CheckerPlugin(),
    ...plugins
  ];
}

module.exports = config;