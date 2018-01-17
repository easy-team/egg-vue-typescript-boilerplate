'use strict';
import { Controller } from 'egg';
export default class AboutController extends Controller {
  async index() {
    await this.ctx.render('about/about.js', { message: 'vue server side render!' });
  }
}