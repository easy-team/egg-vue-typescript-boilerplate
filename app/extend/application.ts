import { Application } from 'egg';
import DB from '../lib/db/base';
import DBFactory from '../lib/db/factory';
const DBSymbol = Symbol('Application#db');
export default {
  get db(): DB {
    // if (!this[DBSymbol]) {
    //   this[DBSymbol] = DBFactory();
    // }
    // return this[DBSymbol];
    return DBFactory();
  }
};