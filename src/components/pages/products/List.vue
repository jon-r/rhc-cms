<template>
<page-tile title="List Products">
  <product-list-table></product-list-table>
</page-tile>
</template>
<script>
import ProductListTable from './partials/ProductListTable.vue';

export default {
  components: {
    ProductListTable,
  },
  created() {
    this.$store.dispatch('getList','toGoOnline');
  },
}
</script>
