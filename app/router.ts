
import { Application } from 'egg';

/**
 * @param {Egg.Application} app - egg application
 */
export default (application: Application) => {
  const { router, controller } = application;
  router.get('/', controller.home.home.index);
  router.get('/client', controller.home.home.client);
  router.get('/about', controller.about.about.index);
  router.get('/app/api/article/list', controller.app.app.list);
  router.get('/app/api/article/:id', controller.app.app.detail);
  router.get('/app(/.+)?', controller.app.app.index);
};