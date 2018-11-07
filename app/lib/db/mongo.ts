'use strict';
import BaseDB from './base';
export default class MongoDB extends BaseDB {
  constructor(name: string) {
    super(name);
  }
}