import DB from '../lib/db/base';
declare module 'egg' {
  interface Application {
    db: DB;
  }

  interface Context {
    db: DB;
  }
}