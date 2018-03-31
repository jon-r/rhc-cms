<template>
  <b-collapse class="panel">
    <div class="panel-heading" slot="trigger">
      <strong>{{group.group_name}}</strong>
    </div>

    <b-tabs v-model="activeTab" position="is-centered" size="is-small">
      <b-tab-item label="Categories">
        <category-list :categories="categories"></category-list>
      </b-tab-item>

      <b-tab-item label="Group Options">
        todo...
      </b-tab-item>
    </b-tabs>

  </b-collapse>
</template>
<script>
  import CategoryList from './CategoryList.vue';

  export default {
    components: {
      CategoryList,
    },
    props: ['group'],
    data() {
      return {
        activeTab: 0,
      }
    },
    computed: {
      categories() {
        return this.$store.getters.categories
          .filter(category => category.group_id === this.group.id);
      },
    },
  }
</script>