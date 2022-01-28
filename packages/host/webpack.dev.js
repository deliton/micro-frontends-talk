const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const deps = require("./package.json").dependencies;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3002/",
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        appComponents: "appComponents@http://localhost:4000/remoteEntry.js",
        homePage: "homePage@http://localhost:3011/remoteEntry.js",
        blog: "blog@http://localhost:3003/remoteEntry.js",
        trending: "trending@http://localhost:3020/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
