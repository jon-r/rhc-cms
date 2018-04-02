<template>
<button
    class="button is-success"
    type="submit"
    :class="{'is-loading': isLoading}"
    @click.prevent="onClick"
>
  <b-icon icon="check"></b-icon>
  <span>Save</span>
</button>
</template>
<script>
export default {
  props: ['isLoading'],
  methods: {
    onClick() {
      this.$emit('save');
    },
  },
}
</script>