<template>
<tile-container>
  <page-tile tile="Products index">
    <ul>
      <li><router-link :to="{title: 'products-index'}">Index</router-link></li>
      <li><router-link :to="{title: 'edit-categories'}">Categories</router-link></li>
      <li><router-link :to="{title: 'products-index'}">Index</router-link></li>
      <li><router-link :to="{title: 'products-index'}">Index</router-link></li>
      <li><router-link :to="{title: 'products-index'}">Index</router-link></li>
      <li></li>
    </ul>
  </page-tile>

  <page-tile title="results">
    <ul>
      <li v-for="item in list" :key="item.id">
        <r-link to="edit-product" :params="{id: item.id}" >
          RHC{{item.rhc_ref}}: {{item.product_name}}
        </r-link>
      </li>
    </ul>

    <b-pagination
        :total="listCount"
        :current.sync="pageNumber"
        :per-page="20">
    </b-pagination>
  </page-tile>
</tile-container>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      pageNumber: 1,
    }
  },
  computed: {
    ...mapGetters([
      'list',
      'listCount'
    ]),
  },
  created() {
    this.getData(this.pageNumber);
  },
  watch: {
    pageNumber: 'getData'
  },
  methods: {
    ...mapActions({
      getData: 'getToGoOnline'
    }),
    // getData() {
    //   this.$store.dispatch(, this.pageNumber);
    // }
  }
}
</script>
