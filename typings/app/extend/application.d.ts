// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendApplication from '../../../app/extend/application';
type ExtendApplicationType = typeof ExtendApplication;
declare module 'egg' {
  interface Application extends ExtendApplicationType { }
}