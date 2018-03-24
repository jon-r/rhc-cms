<template>
<div class="container">
  <div class="columns is-desktop">
    <div class="column">
      <bread-crumbs></bread-crumbs>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <main>
        <router-view></router-view>
      </main>
    </div>
    <div class="column is-2 is-hidden-touch">
      <side-bar></side-bar>
    </div>
  </div>
</div>
</template>
<script>
import BreadCrumbs from '../BreadCrumbs.vue';
import SideBar from '../SideBar.vue';

export default {
  components: {
    SideBar,
    BreadCrumbs,
  }
}
</script>
