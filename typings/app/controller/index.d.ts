// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportTest from '../../../app/controller/test';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    test: ExportTest;
  }
}
