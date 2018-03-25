<template>
  <div class="tile is-ancestor" :class="[directionClass]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: ['horizontal'],
    data() {
      return {
        directionClass: this.horizontal === '' ? '' : 'is-vertical',
      };
    },
  };
</script>
