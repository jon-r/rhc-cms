import Vuex from 'vuex';

import products from './products';

export default () => new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // TODO: add loading, error, other global states

  modules: {
    products,
  },
});
