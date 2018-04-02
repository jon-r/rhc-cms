<template>
<tile-container>

    <category-list v-for="group in groups" :key="group.id" :group="group"></category-list>

</tile-container>
</template>

<script>
import {mapGetters} from 'vuex';

import CategoryList from './partials/CategoryList.vue';

export default {
  components: {
    CategoryList,
  },
  created() {
    this.$store.dispatch('getCategories');
  },
  computed: {
    ...mapGetters([
      'groups',
    ]),
  },
};
</script>