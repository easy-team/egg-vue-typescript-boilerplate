import clientRender from 'client';
import router from 'component/app/router';
import Layout from 'component/layout/app/index.ts';
import serverRender from 'server';
import store from 'store/app';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import app from './app.vue';

Vue.component(Layout.name, Layout);
sync(store, router);

const options = {
  base: '/app',
  ...app,
  router,
  store,
};

export default EASY_ENV_IS_NODE ? serverRender(options) : clientRender(options);
