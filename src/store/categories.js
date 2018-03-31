import {fetchFromAPI} from '../helpers/remoteData';
import {TOGGLE_LOADING} from '.';

const GET_CATEGORIES_LIST = 'CATEGORIES/GET_LIST';

export default {
  state: {
    categories: [],
    groups: [],
  },
  actions: {
    getCategories({commit}) {
      commit(TOGGLE_LOADING, true);

      fetchFromAPI('/cms/categories')
        .then(({data}) => {
          commit(GET_CATEGORIES_LIST, data);
          commit(TOGGLE_LOADING, false);
        });
    },
  },
  mutations: {
    [GET_CATEGORIES_LIST](state, {values}) {
      state.categories = values.categories;
      state.groups = values.groups;
    },
  },
  getters: {
    groups: state => state.groups,
    groupedCategories: state => id => state.categories
      .filter(category => category.group_id === id)
      .map(category => ({
        ...category,
        name: category.cat_name,
      })),
  },
};
