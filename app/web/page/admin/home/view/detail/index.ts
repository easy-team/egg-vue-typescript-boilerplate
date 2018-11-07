import { Vue, Component } from 'vue-property-decorator';
import Article from '../../../../../../model/article';

import {
  Getter,
  Action
} from 'vuex-class';

@Component
export default class Detail extends Vue {
  @Getter('article') article?: Article;
  fetchApi(options) {
    const { store, route } = options;
    const { id } = route.params;
    return store.dispatch('getArticle', { id });
  }
  destroyed() {
    this.$store.state.admin.article = null;
   }
}