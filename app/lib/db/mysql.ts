'use strict';
import BaseDB from './base';
export default class MySQLDB extends BaseDB {
  constructor(name?: string) {
    super(name);
  }
}