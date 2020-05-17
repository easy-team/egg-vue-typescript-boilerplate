'use strict';
import { Context } from 'egg';
import DB from '../lib/db/base';
export default {
  get db(): DB {
    return (this as Context).app.db;
  }
};