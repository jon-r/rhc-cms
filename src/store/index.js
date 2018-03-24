import Vuex from 'vuex';

import products from './products';

export const TOGGLE_LOADING = 'GLOBAL/TOGGLE_LOADING';

export default () => new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // TODO: add loading, error, other global states
  state: {
    itemsPerPage: 10,
    isLoading: false,
  },
  actions: {
    toggleLoading({ commit }, isLoading) {
      commit(TOGGLE_LOADING, isLoading);
    },
  },
  mutations: {
    [TOGGLE_LOADING](state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  getters: {
    itemsPerPage: state => state.itemsPerPage,
    isLoading: state => state.isLoading,
  },

  modules: {
    products,
  },
});
