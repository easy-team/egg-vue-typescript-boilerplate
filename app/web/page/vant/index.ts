import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Button } from 'vant';
// @ts-ignore
import Layout from '../../component/layout/index.vue';

@Component({
  components: {
    Layout,
    Button
  }
})
export default class Index extends Vue {
  
}