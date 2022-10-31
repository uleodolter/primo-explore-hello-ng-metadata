const webpack = require("webpack");
const path = require("path");

/**
 * Webpack Plugins
 */
const CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * Webpack Constants
 */
const ENV = process.env.NODE_ENV || "development";
const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

/**
 * Static metadata
 *
 * See: (custom attribute)
 */
const METADATA = {
  ENV: JSON.stringify(ENV),
  host: "0.0.0.0",
  // port is determined from npm config
  // which is set in package.json
  // "config": {
  //    "port": "8003"
  // }
  port: process.env.npm_package_config_port || 8003,
};

const config = {
  entry: "./src/main.js",
  output: {
    path: path.join(DESTINATION, "js"),
    filename: "custom.js",
  },
  module: {
    rules: [
      // Scripts
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      // Styles
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      /**
       * Raw loader support for *.css files
       * Returns file content as string
       *
       * See: https://github.com/webpack/raw-loader
       */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "ngtemplate-loader",
            options: {
              relativeTo: ROOT,
            },
          },
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^angular$/,
    }),
    new webpack.DefinePlugin({
      ENV: METADATA.ENV,
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".css", ".scss", ".html"],
  },
  devtool: "source-map",
};

module.exports = config;
