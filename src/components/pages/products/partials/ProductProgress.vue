<template>
<ul>
  <li v-for="(requirement, key) in progress" :key="key" :class="getColor(requirement.color)">
    {{requirement.value}} {{requirement.name}}
  </li>
</ul>
</template>
<script>
export default {
  props: ['progress'],
  methods: {
    getColor(value) {
      if (value === 0) {
        return 'has-text-danger';
      } else if (value === 1) {
        return 'has-text-amber';
      } else {
        return 'has-text-success';
      }
    },
  },
};
</script>
