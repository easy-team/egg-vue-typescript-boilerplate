import { EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export default (app: EggAppConfig) => {
  const config: any = {};

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  config.view = {
    cache: false
  };

  config.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };

  config.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  config.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  config.keys = '123456';

  config.middleware = [
    'access'
  ];

  return config;
};
