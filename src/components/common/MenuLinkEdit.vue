<template>
  <div>
    {{link.slug}}
    <formly-form :form="form" :model="model" :fields="fields"></formly-form>
  </div>
</template>
<script>
  import {Span} from 'vue-formly-buefy/dist/controls'

  export default {
    props: ['link'],
    data() {
      return {
        form: {},
        model: {
          slug: this.link.slug,
        },
        fields: [
          {
            key: 'slug',
            type: 'input-with-field',
            templateOptions: {
              properties: {
                label: 'Category URL',
              },
            },
            validators: {
              existing: {
                expression: false,
                message: 'Must be unique',
              },
            },
          },
        ],
      }
    },
  }
</script>