import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
// @ts-ignore
import Layout from '../../../component/layout/index.vue';
import './login.css';
@Component({
  components: {
    Layout
  }
})
export default class Login extends Vue {
  username: string = 'admin';
  password: string = 'admin';
  remenber: boolean = false;
}