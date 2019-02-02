import { TickerListMutationTypes as mutationType } from './TickerListMutationTypes';
import { TickerListState, Ticker } from './TickerListState';

const tickerListMutations = {
  [mutationType.SET_MARKET_LIST](state: TickerListState, tickerList: Ticker[]) {
    state.tickerList = tickerList;
  }
};

export default tickerListMutations;