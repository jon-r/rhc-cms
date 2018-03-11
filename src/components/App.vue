<template>
<div class="site-background">
  <div v-if="loaded">
    <nav-bar></nav-bar>

    <section class="section">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-9 is-offset-3-desktop">
            <bread-crumbs></bread-crumbs>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3 is-hidden-touch">
            <side-bar></side-bar>
          </div>
          <div class="column">
            <main>
              <router-view></router-view>
            </main>
          </div>
        </div>
      </div>
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

      <span v-show="$auth.check()">
        <router-link :to="{name: 'account'}">account</router-link> &bull;
        <a v-on:click="logout()" href="javascript:void(0);">logout</a>
      </span>

      <span v-show="$auth.impersonating()">
        &bull;
        <a v-on:click="unimpersonate()" href="javascript:void(0);">(logout {{ $auth.user().username }})</a>
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
import BreadCrumbs from './BreadCrumbs.vue';
import SideBar from './SideBar.vue';

export default {
  data() {
    return {
      context: 'app context',
      loaded: false,
    };
  },
  components: {
    NavBar,
    SideBar,
    BreadCrumbs,
  },

  mounted() {
    // Set up $auth.ready with other arbitrary loaders (ex: language file).
    setTimeout(() => {
      this.loaded = true;
      console.log(this.context);
    }, 500);
  },

  created() {
    this.$auth.ready(() => {
      console.log(`ready ${this.context}`);
    });
  },

  methods: {
    logout() {
      this.$auth.logout({
        makeRequest: true,
        success() {
          console.log(`success ${this.context}`);
        },
        error() {
          console.log(`error ${this.context}`);
        },
      });
    },

    unimpersonate() {
      this.$auth.unimpersonate({
        success() {
          console.log(`success ${this.context}`);
        },
        error() {
          console.log(`error ${this.context}`);
        },
      });
    },
  },
};
</script>

<style lang="scss" >
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #424a57;
$primary-invert: findColorInvert($primary);

$base-color: #f2f2f2;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

.site-background {
    background-color: $base-color;
    padding-top: $navbar-height;
    min-height: 100vh;
}

.margin-bottom {
  margin-bottom: 0.75rem;
}
</style>
