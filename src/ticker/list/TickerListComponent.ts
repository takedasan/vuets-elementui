import Vue from 'vue';
import Component from 'vue-class-component';
import store from '@/ticker/list/TickerListStore';
import { TickerListActionTypes as ActionType } from './TickerListActionTypes';

// @Component デコレータはクラスが Vue コンポーネントであることを示します
@Component({
  template: `
  <div>
    <el-table :data="$store.getters.tickerList" stripe style="width: 100%" height="800px">
      <el-table-column prop="currency" sortable label="通貨" />
      <el-table-column prop="marketPrice.15m" sortable label="15m" />
      <el-table-column prop="marketPrice.last" sortable label="Last" />
      <el-table-column prop="marketPrice.buy" sortable label="Buy" />
      <el-table-column prop="marketPrice.sell" sortable label="Sell" />
    </el-table>
  </div>
  `,
  store
})
export default class TickerListComponent extends Vue {
  private beforeMount(): void {
    this.$store.dispatch(ActionType.SET_MARKET_LIST);
  }
}
