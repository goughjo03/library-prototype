const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const baseConfig = require("./base.config");
const deps = require("../package.json").dependencies;

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    new ModuleFederationPlugin({
      name: "shared",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Button": "./src/components/Button/index.tsx",
        "./TextInput": "./src/components/TextInput/index.tsx",
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
