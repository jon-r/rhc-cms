import {fetchFromAPI} from './helpers';
import {LAYOUT_INIT} from './mutations';

export default {
  async testAction({commit}) {
    let {data} = await fetchFromAPI('/users');

    commit(LAYOUT_INIT, data);
  },
};
