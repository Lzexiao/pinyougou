module.exports = {
  //是否开启eslint
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        content: "components/content",
        common: "components/common",
        assets: "@/assets",
        network: "@/network",
        views: "@/views",
      },
    },
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '品优购商城-综合网购首选-正品低价、品质保障、配送及时、轻松购物！'
        return args
      })
  }
};
