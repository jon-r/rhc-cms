<template>
  <tile-container>
    <page-tile title="Products To Go Online">
      <product-list-table :handle-progress="handleProgress"></product-list-table>
    </page-tile>
  </tile-container>
</template>
<script>
  import ProductListTable from './partials/ProductListTable.vue';

  export default {
    components: {
      ProductListTable,
    },
    created() {
      this.$store.dispatch('getList', 'toGoOnline');
    },
    methods: {
      handleProgress({
                       categories_count,
                       images_count,
                       description_length,
                       price,
                     }) {
        return [{
          name: 'Categories',
          value: categories_count,
          color: categories_count,
        },
          {
            name: 'Images',
            value: images_count,
            color: images_count,
          },
          {
            name: 'Description',
            value: description_length < 10 ? 'No' : description_length < 200 ? 'Short' : 'Has',
            color: description_length < 10 ? 0 : description_length < 200 ? 1 : 2,
          },
          {
            name: 'Price',
            value: parseFloat(price) ? 'Has' : 'No',
            color: parseFloat(price),
          },
        ];
      },
    },
  };
</script>
