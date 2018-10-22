// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import AboutAbout from '../../../app/controller/about/about';
import AppApp from '../../../app/controller/app/app';
import HomeHome from '../../../app/controller/home/home';

declare module 'egg' {
  interface IController {
    about: {
      about: AboutAbout;
    };
    app: {
      app: AppApp;
    };
    home: {
      home: HomeHome;
    };
  }
}
