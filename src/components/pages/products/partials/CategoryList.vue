<template>
<page-tile :title="group.group_name">
  <draggable :list="editableCategories" class="columns is-multiline" :options="draggableOptions">
    <div class="column is-3" v-for="(category, n) in editableCategories" :key="category.id">
      <div class="notification">
        <figure class="image is-square">
          <img src="http://via.placeholder.com/256x256">
        </figure>
        <h1 class="title is-6">{{category.cat_name}} = {{category.sort_order}}</h1>
      </div>
    </div>

    <div slot="footer">
      <div v-if="hasChanges">updated</div>
    </div>
  </draggable>

  <control-buttons @save="updateOrder" :request="request" hasSave>
  </control-buttons>
</page-tile>
</template>

<script>
/*
* todo fix this to clone before getting to this stage (in the parent component, clone on mount??)
* rejig to use tiles instead of a list of categories (ie match website)
* maybe modal on tile click to do form, instead of dropdown?? need to tone down the BG though
* remove group settings (to be second page)
* maybe remove BG tile? just have tiles on the grey. perhaps just a border.
*
* save button in group title? to save order.
* consider removing the sidebar. have it only on products, to bulk save products
* delete button = 'are you sure' in dialog section buefy.
 */
import Vue from 'vue';
import draggable from 'vuedraggable';
import CategoryEdit from './CategoryEdit.vue';
import ControlButtons from '../../../common/ControlButtons.vue';

export default {
  props: [
    'group',
  ],
  components: {
    CategoryEdit,
    draggable,
    ControlButtons,
  },
  data() {
    return {
      hasChanges: false,
      editableCategories: [],
      draggableOptions: {
        group: 'catGroups',
        animation: 150,
        ghostClass: 'is-ghosted',
      },
      request: {
        isLoading: false,
        message: '',
        type: '',
      },
    }
  },
  mounted() {
    this.makeEditable();
  },
  watch: {
    categories: 'makeEditable',
  },
  computed: {
    categories() {
      return this.$store.getters.groupedCategories(this.group.id);
    },
  },
  methods: {
    makeEditable() {
      this.editableCategories = this.categories.map(cat => ({...cat}));
    },

    // todo -> send/recieve ALL categories. moving from a -> b changes two
    updateOrder() {
      this.request = {
        isLoading: true,
        message: '',
        type: '',
      };

      this.$store.dispatch('updateCategories', {
        categories: this.editableCategories,
        group: this.group.id,
      })
        .then(res => {
          this.request = {
            isLoading: false,
            message: res.message,
            type: 'is-success',
          };
        });
    },
    addCategory() {
      console.log('adding');
    },
  },
}
</script>
<style lang="scss" scoped>
@import "../../../../assets/variables";

.notification {
  padding: 0.75rem;
  cursor: move;

  &:hover {
    background-color: $md-blue-grey-light;
  }

  .is-ghosted & {
    background-color: $md-blue-grey-light;
    opacity: 0.2;
  }
}
</style>