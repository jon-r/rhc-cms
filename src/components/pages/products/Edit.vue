<template>
  <tile-container>
    <page-tile title="Edit Product" v-if="product">
      <h1 class="title">{{product.product_name}}</h1>
      <h3 class="subtitle">RHC{{product.rhc_ref}}</h3>
    </page-tile>
  </tile-container>
</template>
<script>
  import {mapActions} from 'vuex';

  export default {

    computed: {
      itemId() {
        return this.$route && this.$route.params.id || 2000;
      }, // todo 'get highest'
      product() {
        return this.$store.getters.product(this.itemId);
      },
    },
    created() {
      this.getProduct(this.itemId);
    },
    methods: {
      ...mapActions([
        'getProduct',
      ]),
    },
  };
</script>
