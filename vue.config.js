module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    // 设置端口号
    port: 8888,
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
}
