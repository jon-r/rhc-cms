<template>
  <b-collapse class="panel">
    <div class="panel-heading" slot="trigger">
      <strong>{{group.group_name}}</strong>
    </div>

    <b-tabs v-model="activeTab" position="is-centered" size="is-small">
      <b-tab-item label="Categories">
        <sortable-menu :links="categories"></sortable-menu>
      </b-tab-item>

      <b-tab-item label="Group Options">
        todo...
      </b-tab-item>
    </b-tabs>

  </b-collapse>
</template>
<script>
  import SortableMenu from '../../../common/SortableMenu.vue';

  export default {
    components: {
      SortableMenu,
    },
    props: ['group'],
    data() {
      return {
        activeTab: 0,
      }
    },
    computed: {
      categories() {
        return this.$store.getters.groupedCategories(this.group.id);
      },
    },
  }
</script>