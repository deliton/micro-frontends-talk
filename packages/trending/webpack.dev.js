const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const deps = require("./package.json").dependencies;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3020/",
  },

  devServer: {
    port: 3020,
    historyApiFallback: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "trending",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Trending": "./src/components/trending/loader.js",
      },
      shared: {
        ...deps,
        "solid-js": {
          singleton: true,
          requiredVersion: deps["solid-js"],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  devtool: "source-map",
};

module.exports = merge(commonConfig, devConfig);
