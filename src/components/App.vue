<template>
<div class="site-background">
  <div v-if="$auth.ready()">
    <nav-bar></nav-bar>

    <section class="section">
      <router-view></router-view>
    </section>

    <hr/>
    <div style="text-align:center;">
      <router-link :to="{name: 'admin'}">home</router-link> &bull;

      <span v-show="!$auth.check()">
        <router-link :to="{name: 'login'}">login</router-link> &bull;
        <router-link :to="{name: 'register'}">register</router-link> &bull;
      </span>

      <span v-show="$auth.check('admin')">
        <router-link :to="{name: 'admin'}">admin</router-link> &bull;
        <router-link :to="{name: 'users'}">users</router-link> &bull;
      </span>
    </div>

    <div style="text-align:center; font-size:12px;">
      Websanova <a href="https://github.com/websanova/laravel-api-demo">demo server</a> available on GitHub
    </div>
    <b-loading :active="isLoading"></b-loading>
  </div>
  
  <div v-else >
    <div style="text-align:center; padding-top:50px">
          loading site...
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';

import NavBar from './NavBar.vue';
export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  mounted() {
    // Set up $auth.ready with other arbitrary loaders (ex: language file).
    setTimeout(() => {
      this.$store.dispatch('toggleLoading', false);
    }, 500);
  },
};
</script>

<style lang="scss" >
// importing bulma + global settings
@import '../assets/app-styles';

.site-background {
  position: relative;
  background-color: $base-color-bg;
  padding-top: $navbar-height;
  min-height: 100vh;
}

.margin-bottom {
  margin-bottom: 0.75rem;
}
</style>
