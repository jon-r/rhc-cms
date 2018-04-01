<template>
  <div v-if="$auth.ready()">
    <nav-bar></nav-bar>
    <div class="site-background">
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

      <b-loading :active="isLoading" :is-full-page="false"></b-loading>
    </div>
  </div>

  <div v-else>
    <div style="text-align:center; padding-top:50px">
      loading site...
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  import NavBar from './NavBar.vue';

  export default {
    components: {
      NavBar,
    },
    computed: {
      ...mapGetters(['isLoading']),
    },
    mounted() {
      // Set up $auth.ready with other arbitrary loaders (ex: language file).
//      setTimeout(() => {
//        this.$store.dispatch('toggleLoading', false);
//      }, 500);
    },
  };
</script>

<style lang="scss">
  // importing bulma + global settings
  @import '../assets/app-styles';

  .site-background {
    position: relative;
    background-color: $base-color-bg;
    padding-top: $navbar-height;
    min-height: 100vh;
  }

  //put nav above load screen
  .navbar.is-fixed-top {
    z-index: 1000;
  }

  .margin-bottom {
    margin-bottom: 0.75rem;
  }

  .colored-tile {
    @each $name, $pair in $colors {
      // taken from bulma => message.sass
      $color: nth($pair, 1);
      $color-lightning: max((100% - lightness($color)) - 2%, 0%);
      $color-luminance: colorLuminance($color);
      $darken-percentage: $color-luminance * 70%;
      $desaturate-percentage: $color-luminance * 30%;
      &.is-#{$name} {
        background-color: lighten($color, 30%);
        color: desaturate(darken($color, $darken-percentage), $desaturate-percentage);
        border: solid 1px $color;
      }
    }
  }
</style>
