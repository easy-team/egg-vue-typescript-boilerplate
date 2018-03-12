import { Controller } from 'egg';
import * as Model from '../../mocks/article/list';
export default class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home/index.js', Model.getPage(1, 10));
  }

  async client() {
    const { ctx } = this;
    await ctx.renderClient('home/index.js', Model.getPage(1, 10));
  }

  async pager() {
    const { ctx } = this;
    const pageIndex = ctx.query.pageIndex;
    const pageSize = ctx.query.pageSize;
    ctx.body = Model.getPage(pageIndex, pageSize);
  }
}