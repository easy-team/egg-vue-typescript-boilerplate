import HomeController from './controller/home/home';
import AppController from './controller/app/app';
import AboutController from './controller/about/about';

declare module 'egg' {
  export interface Application {
  }

  export interface IController {
    home: {
      home: HomeController
    },
    app: {
      app:AppController,
    },
    about: {
      about: AboutController
    }
  }

  export interface IService {
  }

  function startCluster(options: any)
}