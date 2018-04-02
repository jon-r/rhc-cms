<template>
<div>
  <form @submit.prevent="updateCategory">
    <formly-form :form="form" :model="editableCategory" :fields="fields"></formly-form>
  </form>
  <control-buttons @save="updateOrder" :request="request" hasSave>
  </control-buttons>
</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import {Span} from 'vue-formly-buefy/dist/controls';
import Validation from '../../../../helpers/validation';
import ControlButtons from '../../../common/ControlButtons.vue';

export default {
  props: ['category'],
  data() {
    return {
      editableCategory: {},
      form: {},
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

      request: {
        isLoading: false,
        message: '',
        type: '',
      },
    }
  },
  computed: {
    ...mapGetters([
      'categories',
    ]),
  },
  mounted() {
    this.makeEditable();
  },
  watch: {
    category: 'makeEditable',
  },
  methods: {
    makeEditable() {
      this.editableCategory = {...this.category};
    },
    isUnique(key, value) {
      const exists = Object.keys(this.categories)
        .filter(id => this.category.id.toString() !== id)
        .find(id => this.categories[id][key] === value);

      return !exists
    },
    updateCategory() {
      this.request = {
        isLoading: true,
        message: '',
        type: '',
      };

      this.$store.dispatch('updateCategory', this.editableCategory)
        .then(res => {
          this.request = {
            isLoading: false,
            message: res.message,
            type: 'is-success',
          };
        });
    },
    deleteCategory() {
      alert('not done yet');
    },
  },
}
</script>
<style>

</style>