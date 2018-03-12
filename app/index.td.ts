import AboutController from './controller/about/about';
import AppController from './controller/app/app';
import HomeController from './controller/home/home';

declare module 'egg' {
  export interface IController {
    home: {
      home: HomeController
    };
    app: {
      app: AppController,
    };
    about: {
      about: AboutController
    };
  }

  function startCluster(options: any);
}