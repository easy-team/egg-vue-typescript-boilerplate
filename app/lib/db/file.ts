import * as lowdb from 'lowdb';
import * as lodashid from 'lodash-id';
import * as FileSync from 'lowdb/adapters/FileSync';
import { PlainObject } from 'egg';
import BaseDB from './base';
import Condition from '../condition';
export default class FileDB extends BaseDB {
  public instance: any;
  constructor(name?: string) {
    super(name);
    const file = new FileSync(this.name);
    this.instance = lowdb(file);
    this.instance._.mixin(lodashid);
    this.create();
  }

  public create() {
    this.instance.defaults({ article: [], user: {} }).write();
  }

  public get(collectionName: string) {
    return this.instance.get(collectionName);
  }

  public query(collectionName: string, json: PlainObject) {
    return this.get(collectionName)
      .find(json)
      .write();
  }

  public add(collectionName: string, json: PlainObject) {
    return this.get(collectionName)
      .push(json)
      .write();
  }

  public update(collectionName: string, where: PlainObject, json: PlainObject) {
    return this.get(collectionName).find(where).assign(json).write();
  }

  public delete(collectionName: string, json: PlainObject) {
    return this.get(collectionName).remove(json).write();
  }

  public getPager(collectionName: string, condition: Condition) {
    const {
      where,
      like,
      pageIndex,
      pageSize,
      orderByField,
      orderBy
    } = condition;
    const start = (pageIndex - 1) * pageSize;
    const end = pageIndex * pageSize;
    const result = this.get(collectionName)
      .filter(where)
      .filter(item => {
        return Object.keys(like).reduce((isLike, key) => {
          return isLike && item[key] && item[key].indexOf(like[key]) > -1;
        }, true);
      })
      .orderBy(orderByField, orderBy);
    const total = result.size().value();
    const list = result.slice(start, end).value();
    return { total, list };
  }
}
