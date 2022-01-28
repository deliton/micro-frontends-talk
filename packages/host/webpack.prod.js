const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("./package.json").dependencies;
const HtmlWebPackPlugin = require("html-webpack-plugin");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/host/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        appComponents: `appComponents@${domain}/appComponents/latest/remoteEntry.js`,
        homePage: `homePage@${domain}/homePage/latest/remoteEntry.js`,
        blog: `blog@${domain}/blog/latest/remoteEntry.js`,
        trending: `trending@${domain}/trending/latest/remoteEntry.js`,
      },
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

module.exports = merge(commonConfig, prodConfig);
