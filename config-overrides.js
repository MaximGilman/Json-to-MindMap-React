const { addWebpackModuleRule } = require("customize-cra");

module.exports = {
  webpack: (config) => {
    addWebpackModuleRule({
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    })(config);

    return config;
  },
};
