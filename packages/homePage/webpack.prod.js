const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { VueLoaderPlugin } = require("vue-loader");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/homePage/latest/",
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
  ],
};

module.exports = merge(commonConfig, prodConfig);
