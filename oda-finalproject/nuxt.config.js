
module.exports = {
  // Comment this out when running dev, un-comment when generating and pushing to git 
  router: {
    base: '/final-project-team-32/oda-finalproject/dist/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'oda-finalproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ],
    script: [
      { src: 'https://unpkg.com/vue-scrollto' }
    ],
  },
  plugins: ['~plugins/vue-scrollto.js', { src: '~plugins/vue-carousel', ssr: false }, '~plugins/vuetify.js'],
  css: ['~assets/app.styl'],
  /*

  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },


  /*
  ** Build configuration
  */
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  build: {
    publicPath: '/assets/',
    extractCSS: true,
    vendor: ['vuetify'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
