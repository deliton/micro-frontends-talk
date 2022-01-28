const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const deps = require("./package.json").dependencies;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/trending/latest/",
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
  ],
};

module.exports = merge(commonConfig, prodConfig);
