import './header.css';
import LeftMenu from '../menu/menu.vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {
    LeftMenu
  }
})
export default class Header extends Vue {
  collapse: boolean = false;
  site: any = { name: 'Egg + Vue + TypeScript' };
  logout() {
    window.location.replace('/login');
  }
}