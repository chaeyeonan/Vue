const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("@babel/polyfill");

module.exports = {
  //진입점
  entry: {
    app: ["@babel/polyfill", path.join(__dirname, "main.js")], //dirname : 현재경로
  },
  //결과물에 대한 설정
  output: {
    filename: "[name].js", //app.js
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
};
