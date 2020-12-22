module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',

  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  assetsDir: 'static',// 静态资源打包输出目录 (js, css, img, fonts)，相应的url路径也会改变
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,

    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
  },
}