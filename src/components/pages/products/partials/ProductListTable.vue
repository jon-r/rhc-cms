<template>
  <b-table
      :data="productList"
      paginated
      :per-page="itemsPerPage"
      mobile-cards
      striped
      detailed
  >
    <template slot-scope="props">
      <b-table-column field="id" label="id" width="72" sortable>
        <p class="image is-64x64">
          <img src="http://via.placeholder.com/64x64">
        </p>
        <h6 class="subtitle is-7">RHC{{ props.row.rhc_ref }} </h6>
      </b-table-column>
      <b-table-column field="product_name" label="Product Name" width="300" sortable>
        <h4 class="title is-5">{{ props.row.product_name }}</h4>
        <h6 class="subtitle is-7">£{{ parseFloat(props.row.price).toFixed(2) }} </h6>
        <b-field grouped>
          <p class="control">
            <r-link to="view-product" :params="{id: props.row.id}" class="button">
              View
            </r-link>
          </p>
          <p class="control">
            <r-link to="edit-product" :params="{id: props.row.id}" class="button">
              Edit
            </r-link>
          </p>
        </b-field>
      </b-table-column>

      <b-table-column label="Notes">
        <b-field>
          <b-input
              maxlength="255"
              type="textarea"
              :value="props.row.shop_notes"
              size="is-small"
              rows="2"
          >
          </b-input>
        </b-field>
      </b-table-column>

      <b-table-column label="Requirements">
        <b-field>
          <product-progress
              v-if="hasProgress(props.row.id)"
              :progress="progressBars[props.row.id]"
          >
          </product-progress>
        </b-field>
      </b-table-column>

      <b-table-column field="rhc_status" label="Mark Live" width="100">
        <b-field grouped>
          <p class="control">
            <button class="button" :class="getColor(props.row.rhc_status)">
              RHC
            </button>
          </p>
          <p class="control">
            <button class="button" :class="getColor(props.row.curlew_status)">
              2nd
            </button>
          </p>
        </b-field>
      </b-table-column>
    </template>

    <template slot="detail" slot-scope="props">
      <article class="media">
        <div class="media-content">
          edit price | edit
        </div>
      </article>
    </template>
  </b-table>
</template>
<script>
  import {mapGetters} from 'vuex';
  import ProductProgress from './ProductProgress.vue';

  export default {
    props: ['handleProgress'],
    components: {
      ProductProgress,
    },
    data() {
      return {
        progressBars: {},
      };
    },
    computed: {
      ...mapGetters([
        'productList',
        'itemsPerPage',
      ]),
    },
    watch: {
      productList: 'setProgressBars',
    },
    methods: {
      hasProgress(id) {
        return this.progressBars && this.progressBars[id];
      },
      setProgressBars(productList) {
        productList.forEach(product => {
          this.progressBars[product.id] = this.handleProgress(product);
        });
      },
      getColor(value) {
        switch (value) {
          case -1:
            return 'is-grey';
          case 0:
            return 'is-danger';
          default:
            return 'is-success';
        }
      },
    },
  };
</script>
