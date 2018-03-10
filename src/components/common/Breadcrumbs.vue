<template>
<nav class="breadcrumb container">
  <ul>
    <li v-for="(crumb, i) in data.crumbs" v-if="crumb.title" :key="i">
      <router-link :to="crumb.path" active-class="is-active" exact>{{crumb.title}}</router-link>
    </li>
  </ul>
</nav>
</template>
<script>
export default {
  data() {
    return {
      data: {
        crumbs: [],
      },
    };
  },
  mounted() {
    this.updateCrumbs();
  },
  watch: {
    '$route': 'updateCrumbs',
  },
  methods: {
    updateCrumbs() {
      this.data.crumbs = this.$route.matched.map(
        ({
          path,
          meta: {
            title,
          },
        }) => ({
          path,
          title,
        })
      );
    },
  },
};
</script>
