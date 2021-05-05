module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/style/_globals.scss";`
        }
      }
    }
  };