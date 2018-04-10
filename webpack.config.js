'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/(component|store)'],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.ts',
      server: 'app/web/framework/vue/entry/server-loader.ts',
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.ts',
    client: 'app/web/framework/vue/entry/client.ts',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    vue: 'vue/dist/vue.esm.js'
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {
    typescript: true
  },
  plugins: {},
  done() {

  }
};