const webpack = require('webpack');
const firebase = require('firebase/app');
require('firebase/firestore');
//import { db } from '~/plugins/firebase.js'


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
  generate: {
    routes: function () {
      const specialitiesRows = [];
      const settings = { timestampsInSnapshots: true};

      firebase.initializeApp({
        apiKey: "AIzaSyBuJ_QvagsAni6C4pVWM5uAqtsac7knoGk",
        authDomain: "clinalamo-3d38c.firebaseapp.com",
        databaseURL: "https://clinalamo-3d38c.firebaseio.com",
        projectId: "clinalamo-3d38c",
        storageBucket: "clinalamo-3d38c.appspot.com",
        messagingSenderId: "750845688635"
      });
      firebase.firestore().settings(settings);

      /*routes especialidades*/
      let specialities = firebase.firestore().collection("specialities").get().then((querySnapshot) => {
          querySnapshot.docs.map(doc => {
           const url =  doc.data().name.split('/').length > 1 ? doc.data().name.replace(/ /g,"").split('/').join("-ou-") : doc.data().name.split(" ").join("-");
           specialitiesRows.push('/especialidades/' + url.toLowerCase());
          })
          return specialitiesRows
       })

       return Promise.all([specialities]).then(values => {
          return values.join().split(',');
        })
    }
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
