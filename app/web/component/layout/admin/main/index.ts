import { Vue, Component, Prop } from 'vue-property-decorator';
import LayoutHeader from '../header/header.vue';
import LayoutContent from '../content/index.vue';

@Component({
  components: {
    LayoutHeader,
    LayoutContent
  }
})
export default class Main extends Vue {}