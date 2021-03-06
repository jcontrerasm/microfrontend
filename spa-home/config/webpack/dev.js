const Dotenv = require('dotenv-webpack');
const common = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const outputDirectory = '../../dist';
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

// module.exports = {
//   ...common,
//   mode: 'development',
//   devServer: {
//     port: 3200,
//     historyApiFallback: true,
//     open: false
//   },
//   plugins: [
//     new CleanWebpackPlugin({
//       cleanOnceBeforeBuildPatterns: [outputDirectory],
//     }),
//     new HtmlWebpackPlugin({
//       template: './public/index.html'
//     }),
//     new Dotenv()
//   ]
// };

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "single-spa-test",
    projectName: "spa-home",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
      ...common,
    mode: 'development',
    devServer: {
      port: 3200,
      historyApiFallback: true,
      open: false
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [outputDirectory],
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new Dotenv()
    ]
  });
};
