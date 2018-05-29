const webpack = require('webpack');
const firebase = require('firebase/app');
require('firebase/firestore');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Clinálamo - Clínica Médica Dos Álamos Lda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sediada em Évora a Clinálamo - Clínica Médica dos Álamos, Lda. tem como objetivo principal de prestar cuidados assistênciais na área de medicina clínica. Faça uma marcação online, dispomos de uma vasta variedade de Especialidades e Exames.' },
      { hid: 'author', name: 'author', content: 'SmartableWays' },
      { hid: 'robots', name: 'robots', content: 'index, follow'},
      { hid: 'og:title', property: 'og:title', content: 'http://clinalamo.pt/' },
      { hid: 'og:description', property: 'og:description', content: 'Clinálamo - Clínica Médica Dos Álamos Lda. Venha visitar nos ou faça uma marcação online' },
      { hid: 'og:image', property: 'og:image', content: 'http://clinalamo.pt/clinic.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'www.clinalamo.pt' },
      { hid: 'og:canonical_url', property: 'og:canonical_url', content:'http://clinalamo.pt/'},
      { hid: 'google-site-verification', property: 'google-site-verification', content:'GvncAW5mhdo0cu6QQHlI0e0Im_eplT9z74ACCjVXAyI'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css' }
    ],
    script: [
     { src: 'https://unpkg.com/sweetalert/dist/sweetalert.min.js' },
     { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWDPCiH080dNCTYC-uprmLOn2mt2BMSUk&amp;sensor=true'},
     { src: '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js'},
    ]
  },
  generate: {
    routes: function () {
      const specialitiesUrls = [];
      const examsUrls = [];
      const steticsUrls = [];
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

      /*routes especialidades & stetics*/
      let specialities = firebase.firestore().collection("specialities").get().then((querySnapshot) => {
          querySnapshot.docs.map(doc => {
           const url =  doc.data().name.split('/').length > 1 ? doc.data().name.replace(/ /g,"").split('/').join("-ou-") : doc.data().name.split(" ").join("-");
           const section =  doc.data().name !== 'Análises Clínicas' && ( doc.data().section === "Especialidades" || doc.data().section === 'Ambas');

           specialitiesUrls.push( (section ? '/especialidades/' : '/estetica/') + url.toLowerCase());
         });
          return specialitiesUrls
       });

       /*routes exams*/
       let exames = firebase.firestore().collection("exams_types").get().then((querySnapshot) => {
           querySnapshot.docs.map(doc => {
            const url =  doc.data().name.split('/').length > 1 ? doc.data().name.replace(/ /g,"").split('/').join("-ou-") : doc.data().name.split(" ").join("-");
            examsUrls.push('/exames/' + url.toLowerCase());
          });
           return examsUrls
        });

       return Promise.all([specialities, exames]).then(values => {
          return values.join().split(',');
        });
    }
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    type: 'animation'

  },
  modules: [
    '@nuxtjs/moment',
    ['@nuxtjs/component-cache', {
     max: 10000,
     maxAge: 1000 * 60 * 60
   }]
  ],
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    vendor: ['moment'],
    /*plugins: [
     // set shortcuts as global for bootstrap
         new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery',
           'window.jQuery': 'jquery'
         })
     ],*/
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
       '~/assets/bootstrap-datepicker3.min.css',
       '~/assets/main.css'
  ],
  plugins:[
    '~/plugins/firebase.js',
    { src: '~/plugins/jquery.js', ssr: false },
    { src: '~/plugins/cookies.js', ssr: false },
    { src: '~/plugins/bootstrap-datepicker.min.js', ssr: false },
    { src: '~/plugins/bootstrap-datepicker.pt.min.js', ssr: false },
    { src: '~/plugins/bootstrap.min.js', ssr: false },
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
