<template>
  <div>
    <b-collapse
        class="card"
        :open="false"
        v-for="(category, n) in categories"
        :key="category.id"
    >
      <div
          class="card-header"
          slot="trigger"
          slot-scope="props"
      >
        <p class="card-header-title">
          {{category.cat_name}}
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'caret-up' : 'caret-down'"></b-icon>
        </a>
      </div>

      <div class="card-content">
        <category-edit :category="cloned(n)"></category-edit>
      </div>
    </b-collapse>
  </div>
</template>
<script>
  import Vue from 'vue';
  import CategoryEdit from './CategoryEdit.vue';

  export default {
    props: ['categories'],
    components: {
      CategoryEdit,
    },
    methods: {
      cloned(index) {
        return {...this.categories[index]}
      },
    },
  }
</script>