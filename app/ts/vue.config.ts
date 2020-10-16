module.exports = {
  configureWebpack(config) {
    config.module.rules.push({
        test: /\.coffee$/,
        use: ['coffee-loader']
      });
    config.module.rules.push({
      test: /\.ts$/,
      loader: "ts-loader",
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    });
  },
  devServer: {
    proxy: {
      api: {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
