const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'clinic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'clinic web site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //modules: [
  //   '@nuxtjs/sitemap'
  //],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
/*  modules: [
   {
  // src: '@rafamaciel/firebase',
     options: {
       apiKey: "AIzaSyBuJ_QvagsAni6C4pVWM5uAqtsac7knoGk",
       authDomain: "clinalamo-3d38c.firebaseapp.com",
       databaseURL: "https://clinalamo-3d38c.firebaseio.com",
       projectId: "clinalamo-3d38c",
       storageBucket: "clinalamo-3d38c.appspot.com",
       messagingSenderId: "750845688635"
     }
   }
 ],*/
  build: {
    vendor: ['jquery','bootstrap', 'firebase'],
    plugins: [
         // set shortcuts as global for bootstrap
         new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery',
           'window.jQuery': 'jquery'
         })
     ],
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
  },
  css: [
       '~/assets/animate.css',
       '~/assets/form-elements.css',
       '~/assets/multi-step.css',
       '~/assets/bootstrap.css',
       '~/assets/main.css'
  ],
  plugins:[
    '~/plugins/firebase.js',
    { src: '~/plugins/plugins.js', ssr: false },
    { src: '~/plugins/jquery.isotope.min.js', ssr: false },
    { src: '~/plugins/init.js', ssr: false }
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
