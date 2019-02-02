import Vue from "vue";
import Vuex from "vuex";
import tickerListState from './TickerListState';
import tickerListMutations from './TickerListMutations';
import tickerListActions from './TickerListActions';
import tickerListGetters from './TickerListGetters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: tickerListState,
  mutations: tickerListMutations,
  actions: tickerListActions,
  getters: tickerListGetters
});
