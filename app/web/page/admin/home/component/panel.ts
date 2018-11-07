'use strict';
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component
export default class Panel extends Vue {
  @Emit('handleSetLineChartData')
  private handleSetLineChartData(type: string) {
    console.log(type);
  }
}
