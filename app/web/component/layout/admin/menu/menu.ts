import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  @Prop() private collapse: boolean = false;
  private menu: any = {
    home: {
      name: '首页',
      path: '/',
      icon: 'el-icon-menu',
    },
    content: {
      name: '内容管理',
      icon: 'el-icon-document',
      children: {
        list: {
          name: '文章管理',
          path: '/article/list'
        },
        add: {
          name: '添加文章',
          path: '/article/add'
        }
      }
    },
  };
  private handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
  private handleClose(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
}