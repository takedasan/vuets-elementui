import tickerService from '../TickerService';
import { TickerListActionTypes as actionTypes } from './TickerListActionTypes';
import { TickerListMutationTypes as mutationTypes } from './TickerListMutationTypes';
import { Ticker } from './TickerListState';

const tickerListActions = {
  async [actionTypes.SET_MARKET_LIST]({ commit }): Promise<void> {
    const tickerList: Ticker[] = await tickerService.selectTicker().catch((error: Error) => {
      throw error;
    });
    commit(mutationTypes.SET_MARKET_LIST, tickerList);
  }
};

export default tickerListActions;