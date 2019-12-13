'use strict';
module.exports = {
  entry: {
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