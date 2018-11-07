// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Article from '../../../app/model/article';
import User from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof Article>;
    User: ReturnType<typeof User>;
  }
}
