<template>
<router-link :to="{ name: to, params }" active-class="is-active" :exact="exact">
  <slot></slot>
</router-link>
</template>
<script>
export default {
  props: ['to', 'params', 'exact'],
};
</script>
