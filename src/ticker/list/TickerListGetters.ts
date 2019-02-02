import { TickerListState, Ticker } from './TickerListState';

const tickerListGetters = {
  tickerList(state: TickerListState): Ticker[] {
    return state.tickerList;
  }
}

export default tickerListGetters;