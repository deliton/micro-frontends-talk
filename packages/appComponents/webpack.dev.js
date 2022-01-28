const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const deps = require("./package.json").dependencies;

const devConfig = {
  output: {
    publicPath: "http://localhost:4000/",
  },

  devServer: {
    port: 4000,
    historyApiFallback: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "appComponents",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./HeaderNav": "./src/sharedComponents/HeaderNav.jsx",
        "./Footer": "./src/sharedComponents/Footer.jsx",
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

module.exports = merge(commonConfig, devConfig);
