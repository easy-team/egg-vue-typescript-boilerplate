import axios from 'axios';
import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import {
  SET_ARTICLE_LIST,
  SET_ARTICLE_DETAIL,
  SET_SAVE_ARTICLE,
  DELETE_ARTICLE
} from './type';

import RootState from '../../state';
import AdminState from './state';
import Article from '../../../../../model/article';

axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';

export default class AdminModule implements Module<AdminState, RootState> {
  state: AdminState;

  getters: GetterTree<AdminState, RootState> = {
    total(state): number {
      return state.articleTotal;
    },
    article(state): Article {
      return state.article || {};
    },
    articleList(state): Article[] {
      return state.articleList;
    },
  };

  actions: ActionTree<AdminState, RootState> = {
    async getArticleList({ commit, dispatch, state, rootState }, condition) {
      // fetch no token headers
      const headers = EASY_ENV_IS_NODE ? {
        'x-csrf-token': rootState.csrf,
        'Cookie': `csrfToken=${rootState.csrf}`
      } : {};
      const res = await axios.post(`${rootState.origin}/admin/api/article/list`, condition, { headers });
      commit(SET_ARTICLE_LIST, res.data);
    },
    async getArticle({ commit, dispatch, state , rootState}, { id }) {
      const res = await axios.get(`${rootState.origin}/admin/api/article/${id}`);
      commit(SET_ARTICLE_DETAIL, res.data);
    },
    async saveArticle({ commit, dispatch, state, rootState }, data) {
      // node need auth
      const res = await axios.post(`${rootState.origin}/admin/api/article/add`, data);
      commit(SET_ARTICLE_LIST, res.data);
      return res;
    },
    async deleteArticle({ commit, dispatch, state, rootState }, { id }) {
      // node need auth
      await axios.post(`${rootState.origin}/admin/api/article/del`, { id });
      commit(DELETE_ARTICLE, { id });
    }
  };

  mutations: MutationTree<AdminState> = {
    [SET_ARTICLE_LIST](state, { list, total }) {
      state.articleTotal = total;
      state.articleList = list;
    },
    [SET_ARTICLE_DETAIL](state, data) {
      state.article = data;
    },
    [SET_SAVE_ARTICLE](state, data) {
      state.articleTotal += 1;
      state.articleList = [data].concat(state.articleList);
    },
    [DELETE_ARTICLE](state, { id }) {
      state.articleTotal -= 1;
      state.articleList = state.articleList.filter((item: any) => {
        return item.id !== id;
      });
    }
  };

  constructor(initState: AdminState) {
    this.state = {
      articleTotal: 0,
      articleList: [],
      article: undefined,
      ...initState
    };
  }
}