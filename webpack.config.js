'use strict';
module.exports = {
  entry: {
    'admin/login': 'app/web/page/admin/login/login.vue',
    'admin/home': 'app/web/page/admin/home/index.ts'
  },
  module:{
    rules:[
      { babel: false },
      { typescript: true }
    ]
  },
  plugins: [
    {
      copy: [{
        from: 'app/web/asset',
        to: 'asset'
      }]
    }
  ]
};