module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Ma météo'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/main.scss";`
      }
    }
  }
};