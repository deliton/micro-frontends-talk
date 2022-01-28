const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

const devConfig = {
  output: {
    publicPath: "http://localhost:3011/",
  },

  devServer: {
    port: 3011,
    historyApiFallback: true,
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "homePage",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Home": "./src/index.js",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
