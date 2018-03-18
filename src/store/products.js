import { fetchFromAPI } from './helpers';

const PRODUCTS_TO_GO_ONLINE = 'PRODUCTS/TO_GO_ONLINE';
const PRODUCT_GET = 'PRODUCT/GET';

export default {
  state: {
    products: {},
    currentList: {
      total: 0,
      ids: [],
    },
  },
  actions: {
    async getToGoOnline({ commit }, page) {
      let { data } = await fetchFromAPI('/cms/products/list/toGoOnline', {
        query: { page },
      });
      commit(PRODUCTS_TO_GO_ONLINE, data);
    },

    async getProduct({ commit }, id) {
      let { data } = await fetchFromAPI(`/cms/product/show/${id}`);
      commit(PRODUCT_GET, data);
    },
  },
  mutations: {
    [PRODUCTS_TO_GO_ONLINE](state, { values }) {
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
      state.currentList = {
        total: values.count,
        ids,
      };
    },
    [PRODUCT_GET](state, { values }) {
      state.products = {
        ...state.products,
        [values.product.id]: values.product,
      };
    },
  },
  getters: {
    list: state => state.currentList.ids.map(id => state.products[id]),
    listCount: state => state.currentList.total,
    product: state => id => state.products[id],
  },
};
