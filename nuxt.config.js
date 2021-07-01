
export default {
  mode: 'universal',
  head: {
    title: 'TOBIAS KRASKA - Meisterbetrieb',
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'index,follow' },
      { name: 'viewport', content: 'width:device-width, initial-scale:1, shrink-to-fit:no' },
      { name: 'title', content: 'TOBIAS KRASKA | Meisterbetrieb' },
      { name: 'author', content: 'https://www.dsbnet.de/' },
      { hid: 'description', name: 'description', content:'Die Firma Tobias Kraska bietet Ihnen für jedes Problem eine kompetente Lösung und steht für alle Fragen im Bereich Heizung und Sanitär zu Ihrer Verfügung' },

      { name:'og:title' , content:'TOBIAS KRASKA | Meisterbetrieb' },
      { name:'og:type' , content:'article' },
      { name:'og:url' , content:'https://www.heizungstechnik-kraska.de' },
      { name:'og:image' , content:'images/logo.png' },
      { name:'og:description'
          , content:'Die Firma Tobias Kraska bietet Ihnen für jedes Problem eine kompetente Lösung und steht für alle Fragen im Bereich Heizung und Sanitär zu Ihrer Verfügung' },
      { name:'og:site_name' , content:'heizungstechnik-kraska' }


    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href:'/assets/icon/tkmeisterbetrieb.ico' },
      { rel: 'stylesheet', href: '/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', href: '/assets/css/neumorphism.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family:Poppins:200,300,400,500,600,700' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css' },
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js', body: true },
      { src: 'assets/vendor/jquery/dist/jquery.min.js', body: true },
      { src: 'assets/vendor/popper.js/dist/umd/popper.min.js', body: true },
      { src: 'assets/vendor/bootstrap/dist/js/bootstrap.min.js', body: true },
      { src: 'assets/vendor/headroom.js/dist/headroom.min.js', body: true },
      { src: '/assets/js/main.js', body: true },
      { src: '/assets/js/cookie.js', body: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#f77ade',
    height: '4px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
