<template>
<b-field :message="request.message" :type="request.type">
  <p class="buttons is-right">
    <button
        v-if="hasSave"
        class="button is-success"
        type="submit"
        :class="{'is-loading': request.isLoading}"
        @click.prevent="onClickSave"
    >
      <b-icon icon="check"></b-icon>
      <span>Save</span>
    </button>

    <button
        v-if="hasDelete"
        class="button is-danger is-outlined"
        @click.prevent="onClickDelete"
    >
      <b-icon icon="times"></b-icon>
      <span>Delete (todo)</span>
    </button>

    <button
        v-if="hasAdd"
        class="button is-info"
        @click.prevent="onClickAdd"
    >
      <b-icon icon="plus"></b-icon>
      <span>Add (todo)</span>
    </button>

    <slot></slot>
  </p>

</b-field>
</template>
<script>
export default {
  props: {
    request: Object,
    hasSave: Boolean,
    hasDelete: Boolean,
    hasAdd: Boolean,
  },
  methods: {
    onClickSave() {
      this.$emit('save');
    },
    onClickDelete() {
      this.$emit('delete');
    },
    onClickAdd() {
      this.$emit('add');
    },
  },
};
</script>
<style>
.help {
  text-align: right;
}
</style>