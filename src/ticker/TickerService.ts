import tickerDao from './TickerDao';
import { Ticker } from './list/TickerListState';

const tickerService = {
  async selectTicker(): Promise<Ticker[]> {
    return await tickerDao.selectTicker().catch((error: Error) => {
      throw error;
    }).then(response => {
      const prsed = JSON.parse(JSON.stringify(response));
      const tickerList: Ticker[] = [];

      Object.keys(prsed).forEach(function (key) {
        const value = prsed[key];
        const ticker: Ticker = {
          currency: key,
          marketPrice: {
            '15m': value['15m'],
            last: value.last,
            buy: value.buy,
            sell: value.sell,
            symbol: value.symbol
          }
        };

        tickerList.push(ticker);
      });

      return tickerList;
    });
  }
};

export default tickerService;