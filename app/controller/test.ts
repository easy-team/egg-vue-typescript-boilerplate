import { Controller, Context } from 'egg';

export default class TestController extends Controller {

  public async vant(ctx: Context) {
    await ctx.render('vant.js', {});
  }
}