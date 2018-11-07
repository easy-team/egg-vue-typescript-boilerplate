import { Vue, Component, Emit } from 'vue-property-decorator';
import Layout from 'component/layout/admin/index.vue';
@Component({
  components: {
    Layout
  }
})

export default class Home extends Vue {}