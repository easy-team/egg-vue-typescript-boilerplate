import Vue from 'vue';
import { Getter, Action } from 'vuex-class';
import { Component, Prop, Watch } from 'vue-property-decorator';
import Article from '../../../../../../model/article';

@Component({
  components: {
    MarkdownEditor: () => import('component/MarkdownEditor/index.vue')
  }
})
export default class Write extends Vue {
  @Getter('article') article?: Article;
  @Action('saveArticle') saveArticle;
  @Action('getArticle') getArticle;
  text: string = '';

  isShowEditor: boolean = false;

  async submit(status) {
    const showdown = await import('showdown');
    const converter = new showdown.Converter();
    const article = {
      ...this.article,
      status,
      content : converter.makeHtml(this.text),
    };
    const result = await this.saveArticle(article);
    if (result.status === 200 ) {
      this.$message(`添加成功`);
      this.article = {};
    } else {
      this.$message(`添加失败: ${JSON.stringify(result)}`);
    }
  }

  @Watch('article')
  onArticleChanged(val: string, oldVal: string) {
    if (this.article) {
      // need html to markdown
      this.text = this.article.content || '';
    }
  }

  mounted() {
    this.isShowEditor = true;
    const { id } = this.$route.params;
    if (id) {
      this.getArticle({ id });
    }
  }

  destroyed() {
    this.$store.state.admin.article = {};
  }
}