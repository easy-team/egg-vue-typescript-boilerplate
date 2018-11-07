import { Context, Service } from 'egg';
import { deserialize } from '@hubcarl/json-typescript-mapper';
import Colllection from '../lib/db/collection';
import Article from '../model/article';
import Condition from '../lib/condition';

export default class ArticeService extends Service {
  private context: Context;
  private colllection: Colllection;
  constructor(ctx: Context) {
    super(ctx);
    this.context = ctx;
    this.colllection = new Colllection(ctx.db, 'article');
  }

  public async getArtilceList(condition: Condition) {
    if (condition.categoryId) {
      condition.where.categoryId = condition.categoryId;
    }
    if (condition.status) {
      condition.where.status = condition.status;
    }
    if (condition.title) {
      condition.like.title = condition.title;
    }
    return this.colllection.getPager(condition);
  }

  public async saveArticle(data: object) {
    const article: Article = deserialize(Article, data);
    if (article.id) {
      return this.colllection.update({ id: article.id }, article);
    }
    article.id = this.context.db.getUniqueId();
    this.colllection.add(article);
    return article;
  }

  public async query(json: object) {
    return this.colllection.query(json);
  }

  public async deleteArticle(id: string) {
    return this.colllection.delete({ id });
  }
}
