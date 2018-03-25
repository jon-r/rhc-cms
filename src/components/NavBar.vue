<template>
  <nav class="navbar is-grey is-fixed-top">
    <div class="navbar-brand">
      <router-link :to="{name: 'admin'}" class="navbar-item">
        home
      </router-link>

      <div
          class="navbar-burger"
          :class="{'is-active': isMenuOpen}"
          @click="setMainMenu(!isMenuOpen)"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" :class="{'is-active': isMenuOpen}">
      <div class="navbar-end" v-if="$auth.check('admin')">
        <router-link :to="{name: 'admin'}" class="navbar-item" active-class="is-active" exact>
          Home
        </router-link>
        <router-link :to="{name: 'products-index'}" class="navbar-item" active-class="is-active">
          Products
        </router-link>
        <router-link :to="{name: 'sales-index'}" class="navbar-item" active-class="is-active">
          Sales
        </router-link>
        <router-link :to="{name: 'site-index'}" class="navbar-item" active-class="is-active">
          Site Options
        </router-link>

        <div class="navbar-item has-dropdown" :class="{'is-active': isDropdownOpen}">
          <a class="navbar-link" @click="toggleDropdown">{{ $auth.user().username }}</a>

          <div class="navbar-dropdown is-right" :class="{'is-active': isDropdownOpen}">
            <a class="navbar-item" @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        isDropdownOpen: false,
      };
    },

    methods: {
      setMainMenu(bool) {
        this.isMenuOpen = bool;
      },
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },

      logout() {
        this.$auth.logout({
          makeRequest: true,
          success() {
            console.log(`success ${this.context}`);
            this.$router.push('/login');
            this.isDropdownOpen = false;
          },
          error() {
            console.log(`error ${this.context}`);
          },
        });
      },
    },
  };
</script>
