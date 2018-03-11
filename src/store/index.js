import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

export default () => new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    layout: {
      navigation: [],
      content: [],
    },
    data: {
      users: [],
    },
  },

  getters: {
    getLayoutNavigation: state => state.layout.navigation,
  },

  actions,
  mutations,
});
