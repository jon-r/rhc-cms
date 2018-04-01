<template>
  <tile-container>
    <page-tile title="Edit Categories">
      <group-list-panel v-for="group in groups" :key="group.id" :group="group">
      </group-list-panel>
    </page-tile>
  </tile-container>
</template>
<script>
  import {mapGetters} from 'vuex';

  import GroupListPanel from './partials/GroupListPanel.vue';

  export default {
    components: {
      GroupListPanel,
    },
    created() {
      this.$store.dispatch('getCategories');
    },
    computed: {
      ...mapGetters([
        'groups',
      ])
    },
  }
</script>