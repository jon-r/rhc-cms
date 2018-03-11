import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import VueAuth from '@websanova/vue-auth';
import Vuex from 'vuex';
import Buefy from 'buefy';

import App from './components/App.vue';
import TileContainer from './components/common/TileContainer.vue';
import PageTile from './components/common/PageTile.vue';
import Link from './components/common/Link.vue';

import router from './router';
import store from './store/index';

const {API_URL} = require('../.env.json');

// Vue.config.productionTip = false;

Vue.use(Buefy, { defaultIconPack: 'fas' });

Vue.use(Vuex);

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = API_URL;

Vue.use(VueRouter);
Vue.router = router;

Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'role',
});

// global components; saves importing each time
Vue.component('tile-container', TileContainer);
Vue.component('page-tile', PageTile);
Vue.component('r-link', Link);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#v-app');
