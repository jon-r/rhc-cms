import {fetchFromAPI} from '../helpers/remoteData';
import {TOGGLE_LOADING} from '.';

const GET_LIST = 'PRODUCTS/GET_LIST';
const GET_ITEM = 'PRODUCTS/GET_ITEM';

export default {
  state: {
    products: {},
    currentList: [],
  },
  actions: {
    getList({commit}, listQuery) {
      commit(TOGGLE_LOADING, true);
      fetchFromAPI(`/cms/products/list/${listQuery}`)
        .then(({data}) => {
          commit(GET_LIST, data);
          commit(TOGGLE_LOADING, false);
        });
    },

    async getProduct({commit}, id) {
      commit(TOGGLE_LOADING, true);
      let {data} = await fetchFromAPI(`/cms/product/show/${id}`);
      commit(GET_ITEM, data);
      commit(TOGGLE_LOADING, false);
    },
  },
  mutations: {
    [GET_LIST](state, {values}) {
      const newProducts = {};
      const ids = [];

      values.items.forEach(item => {
        newProducts[item.id] = item;
        ids.push(item.id);
      });
      state.products = {
        ...state.products,
        ...newProducts,
      };
      state.currentList = ids;
    },
    [GET_ITEM](state, {values}) {
      state.products = {
        ...state.products,
        [values.product.id]: values.product,
      };
    },
  },
  getters: {
    productList: state => state.currentList.map(id => state.products[id]),
    productListCount: state => state.currentList.length,
    product: state => id => state.products[id],
  },
};
