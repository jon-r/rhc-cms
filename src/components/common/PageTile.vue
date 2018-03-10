<template>
  <div class="box" :class="styles">
    <h1 v-if="title" class="title">{{title}}</h1>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title', 'styles'],
};
</script>
