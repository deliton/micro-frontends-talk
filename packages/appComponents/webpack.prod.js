const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const deps = require("./package.json").dependencies;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/appComponents/latest/",
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
  ],
};

module.exports = merge(commonConfig, prodConfig);
