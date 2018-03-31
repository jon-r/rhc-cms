<template>
  <form>
    <formly-form :form="form" :model="model" :fields="fields"></formly-form>
  </form>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {
    props: ['category'],
    data() {
      return {
        form: {},
        model: this.category,
        fields: [
          {
            key: 'cat_name',
            type: 'input-with-field',
            required: true,
            templateOptions: {
              properties: {
                maxLength: 30,
                required: true,
              },
              wrapper: {
                properties: {
                  label: 'Name',
                  horizontal: true,
                },
              },
            },
            validators: {
              existing: {
                expression: (field, model, next) => next(
                  this.isUnique('cat_name', model[field.key]),
                ),
                message: 'Must be unique',
              },
            },
          },
          {
            key: 'slug',
            type: 'input-with-field',
            required: true,
            templateOptions: {
              properties: {
                maxLength: 30,
                required: true,
              },
              wrapper: {
                properties: {
                  label: 'Category slug',
                  horizontal: true,
                },
              },
            },
            validators: {
              existing: {
                expression: (field, model, next) => next(
                  this.isUnique('cat_name', model[field.key]),
                ),
                message: 'Must be unique',
              },
            },
          },
        ],
      }
    },
    computed: {
      ...mapGetters([
        'categories',
      ]),
    },
    methods: {
      isUnique(key, value) {
        return !this.categories
          .filter(cat => cat.id !== this.category.id)
          .find(cat => cat[key] === value);
      },
    },
  }
</script>
<style>

</style>