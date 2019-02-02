const tickerListState: TickerListState = {
  tickerList: []
};

export interface TickerListState {
  tickerList: Ticker[];
}

export interface Ticker {
  currency: string;
  marketPrice: MarketPrice;
}

export interface MarketPrice {
  '15m': number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
}

export default tickerListState;