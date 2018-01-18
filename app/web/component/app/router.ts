import Vue from 'vue';

import VueRouter from 'vue-router';
import DetailView from './detail.vue';
import ListView from './list.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes: [
    {
      path: '/',
      component: ListView
    },
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/detail/:id',
      component: DetailView
    }
  ]
});

export default router;