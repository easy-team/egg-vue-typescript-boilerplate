'use strict';
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin')
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  entry: {
    // 'admin/login': 'app/web/page/admin/login/login.vue',
    // 'admin/home': 'app/web/page/admin/home/index.ts',
    'vant': 'app/web/page/vant/index.vue'
  },
  resolve: {
    alias:{
      '@asset': resolve('app/web/asset'),
      '@framework': resolve('app/web/framework'),
      '@component': resolve('app/web/component'),
      '@store': resolve('app/web/page/store'),    
      '@router': resolve('app/web/page/admin/home/router'),        
      '@view': resolve('app/web/page/admin/home/view')
    }
  },
  module:{
    rules:[
      { babel: false },
      { 
        ts: {
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [ tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })]
            }),
          },
          exclude: []
        } 
      }
    ]
  },
  plugins: [
    {
      copy: [{
        from: 'app/web/asset',
        to: 'asset'
      }]
    }
  ],
  compile: {
    thread: false
  }
};