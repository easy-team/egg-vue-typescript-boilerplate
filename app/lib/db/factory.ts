'use strict';
import FileDB from './file';
import MongoDB from './mongo';
import MySQLDB from './mysql';
export default function(type?: string) {
  switch (type) {
    case 'mysql':
      return new MySQLDB();
    case 'mongo':
      return new MySQLDB();
    default:
      return new FileDB();
  }
}