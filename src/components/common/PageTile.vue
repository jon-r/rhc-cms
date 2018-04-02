<template>
<article class="tile is-parent">
  <div class="tile is-child box">
    <h2 v-if="title" class="title is-4">{{title}}</h2>
    <slot></slot>
  </div>
</article>
</template>

<script>
export default {
  props: ['title'],
};
</script>
