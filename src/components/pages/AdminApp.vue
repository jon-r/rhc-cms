<template>
<div class="container">
  <bread-crumbs></bread-crumbs>

  <main>
    <router-view></router-view>
  </main>
</div>
</template>
<script>
import BreadCrumbs from '../BreadCrumbs.vue';

export default {
  components: {
    BreadCrumbs,
  },
};
</script>
