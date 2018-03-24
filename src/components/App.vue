<template>
<div class="site-background">
  <div v-if="loaded">
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
  </div>

  <div v-if="!$auth.ready() || !loaded">
    <div style="text-align:center; padding-top:50px;">
      Loading site...
    </div>
  </div>
</div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  data() {
    return {
      loaded: false,
    };
  },
  components: {
    NavBar,
  },

  mounted() {
    // Set up $auth.ready with other arbitrary loaders (ex: language file).
    setTimeout(() => {
      this.loaded = true;
    }, 500);
  },
};
</script>

<style lang="scss" >
// importing bulma + global settings
@import '../assets/app-styles';

.site-background {
    background-color: $base-color-bg;
    padding-top: $navbar-height;
    min-height: 100vh;
}

.margin-bottom {
    margin-bottom: 0.75rem;
}
</style>
