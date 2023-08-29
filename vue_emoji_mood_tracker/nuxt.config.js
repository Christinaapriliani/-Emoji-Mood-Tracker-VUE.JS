export default {

  head: {
    title: 'Vue Emoji Mood Tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: [
 
    '@nuxt/http',
 
    '@nuxtjs/vuex'
  ],
  buildModules: [
 
    '@nuxtjs/tailwindcss'
  ],
  components: true,
  build: {

    extend(config, ctx) {
    }
  }
}
