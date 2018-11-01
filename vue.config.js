// vue.config.js
module.exports = {
  baseUrl: './',
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    },
    themeColor: '#1da025'
  }
}
