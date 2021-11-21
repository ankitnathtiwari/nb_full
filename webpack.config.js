const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  //entry point
  //output
  //mode

  output: {
    path: path.join(__dirname, "public", "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  //loaders
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  //plugins

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
