<template>
  <b-table
  :data="productList"
  paginated
  :per-page="itemsPerPage"
  mobile-cards
  >
  <template slot-scope="props">
    <b-table-column field="rhc_ref" label="RHC" width="40" numeric>
        {{ props.row.rhc_ref }}
    </b-table-column>

    <b-table-column field="product_name" label="Product Name" sortable>
        {{ props.row.product_name }}
    </b-table-column>

    <b-table-column field="shop_notes" label="Notes">
        {{ props.row.shop_notes }}
    </b-table-column>
  </template>
  
  </b-table>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  // props: ['products'],
  
  computed: {
    ...mapGetters([
      'productList', 
      'itemsPerPage'
    ])
  }
}
</script>
