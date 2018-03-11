export const LAYOUT_INIT = 'LAYOUT/INIT';

export default {
  [LAYOUT_INIT](state, { values }) {
    state.data = {
      ...state.data,
      users: values.items,
    };
  },
};
