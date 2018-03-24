<template>
<article class="tile is-parent">
  <div class="tile is-child message flex-fix" :class="[color]">
    <template v-if="title">
      <div class="message-header">
        <h2 class="is-size-4">{{title}}</h2>
      </div>
    </template>
    <div class="message-body flex-content-fix">
      <slot></slot>
    </div>    
  </div>
</article>
</template>

<script>
export default {
  props: ['title','color'],
};
</script>
<style lang="scss" scoped>
.flex-fix {
  display: flex;
  flex-direction: column;
}
.flex-content-fix {
  flex: 1;
}
</style>
