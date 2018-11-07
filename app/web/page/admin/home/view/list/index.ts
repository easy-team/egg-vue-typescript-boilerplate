import { Vue, Component, Emit } from 'vue-property-decorator';
import {
  Getter,
  Action
} from 'vuex-class';

@Component
export default class List extends Vue {
  @Getter('total') total?: number;
  @Getter('articleList') articleList: any;
  @Action('deleteArticle') deleteArticle: any;

  loading: boolean = false;
  batchSelectArray: number[] = [];

  q = {
    title: undefined,
    categoryId: undefined,
    statusId: undefined,
    pageIndex: 1,
    pageSize: 10
  };

  status = [
    { status: undefined, name: '--请选择--' },
    { status: 1, name: '已发布' },
    { status: 2, name: '草稿' }
  ];

  categories = [
    { categoryId: 0, name: '--请选择--' },
    { categoryId: 1, name: 'Nodejs' },
    { categoryId: 2, name: 'Webpack' },
    { categoryId: 3, name: 'Egg' }
  ];

  fetchApi(options, q) {
    const { store } = options;
    return store.dispatch('getArticleList', q);
  }

  query() {
    this.fetchApi({ store: this.$store }, this.q);
  }

  refresh() {
    this.fetchApi({ store: this.$store }, this.q);
  }

  write() {
    this.$router.push(`/article/add`);
  }

  edit(id) {
    this.$router.push(`/article/edit/${id}`);
  }

  handleSelectionChange(val: number) {
    console.log('handleSelectionChange', val);
  }

  handleSizeChange(val: number) {
    console.log(`每页 ${val} 条`);
    this.q.pageSize = val;
    this.refresh();
  }

  handleCurrentChange(val: number) {
    console.log(`当前页: ${val}`);
    this.q.pageIndex = val;
    this.refresh();
  }

  handleEdit(index: number, row: any) {
    console.log(row);
    this.edit(row.id);
  }

  handleDelete(index: number, row: any) {
    this.deleteArticle({ id: row.id });
    this.$message(`删除[${row.title}]成功!`);
  }

  // 批量选择
  batchSelect(val: number[]) {
    this.batchSelectArray = val;
  }

  // 批量删除
  batchDel() {
    this.$confirm('将批量删除选择文章, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.loading = true;
      this.$message.success('DELETE');
      this.loading = false;
    });
  }
}