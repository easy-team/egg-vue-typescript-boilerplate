// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
  }
}
