// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
  devServer: {
    hot: true,
    host: "opt.fat.renrui.com",
    port: 8081,
    disableHostCheck: true,
    https: false,
    open: true,
  }
}