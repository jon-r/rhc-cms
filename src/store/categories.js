import {fetchFromAPI} from '../helpers/remoteData';
import {SORT_ORDER_ASC} from '../helpers/sorting';
import {TOGGLE_LOADING} from '.';

const GET_CATEGORIES_LIST = 'CATEGORIES/GET_LIST';
const UPDATE_CATEGORIES = 'CATEGORIES/UPDATE';

const UPDATE_CATEGORY = 'CATEGORY/UPDATE';

export default {
  state: {
    categories: {},
    groups: {},
  },
  actions: {
    getCategories({commit}) {
      commit(TOGGLE_LOADING, true);

      fetchFromAPI('/cms/categories')
        .then(data => {
          commit(GET_CATEGORIES_LIST, data.values);
          commit(TOGGLE_LOADING, false);
        });
    },

    updateCategories({commit}, {categories, group}) {
      return fetchFromAPI('/cms/categories/update-all', {
        method: 'post',
        body: {
          categories,
          group,
        },
      })
        .then(res => {
          commit(UPDATE_CATEGORIES, res.values);
          return res;
        })
        .catch(err => {
          // todo global error
          console.log(err);

          return err;
        });
    },

    updateCategory({commit}, category) {
      return fetchFromAPI('/cms/categories/update-all', {method: 'post', body: category})
        .then(res => {
          commit(UPDATE_CATEGORY, res.values);

          return res;
        })
        .catch(err => {
          // todo global error
          console.log(err);

          return err;
        });
    },
  },
  mutations: {
    [GET_CATEGORIES_LIST](state, {categories, groups}) {
      const newGroups = {};
      const newCategories = {};

      groups.forEach(grp => {
        newGroups[grp.id] = grp;
      });
      categories.forEach(cat => {
        newCategories[cat.id] = cat;
      });

      state.categories = newCategories;
      state.groups = newGroups;
    },
    [UPDATE_CATEGORIES](state, {categories}) {
      categories.forEach(cat => {
        state.categories = {
          ...state.categories,
          [cat.id]: cat,
        };
      });


    },
    [UPDATE_CATEGORY](state, {category}) {
      state.categories = {
        ...state.categories,
        [category.id]: category,
      };
    },
  },
  getters: {
    groups: state => state.groups,
    categories: state => state.categories,
    groupedCategories: state => grpId => Object.keys(state.categories)
      .filter(id => state.categories[id].group_id === grpId)
      .map(id => state.categories[id])
      .sort(SORT_ORDER_ASC),
  },
};
