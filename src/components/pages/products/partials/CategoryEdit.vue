<template>
  <form @submit.prevent="storeChanges">
    <formly-form :form="form" :model="model" :fields="fields"></formly-form>
    <b-field horizontal>
      <button class="button is-primary" type="submit">Save</button>
    </b-field>
  </form>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {Span} from 'vue-formly-buefy/dist/controls';
  import Validation from '../../../../helpers/validation';

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
                maxlength: 30,
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
                expression: (field, model, next) =>
                  next(this.isUnique('cat_name', model[field.key])),
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
                maxlength: 30,
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
                expression: (field, model, next) =>
                  next(this.isUnique('slug', model[field.key])),
                message: 'Must be unique',
              },
              isSlug: {
                expression: (field, model, next) =>
                  next(!Validation.regex.URL.test(model[field.key])),
                message: 'Must be lowercase, using dashes for spaces',
              },
            },
          },
          {
            key: 'description',
            type: 'input-with-field',
            templateOptions: {
              properties: {
                type: 'textarea',
                maxlength: 200,
              },
              wrapper: {
                properties: {
                  label: 'Description',
                  horizontal: true,
                },
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

      storeChanges(values) {
        console.log(values);
      },
    },
  }
</script>
<style>

</style>