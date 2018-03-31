<template>
  <div>
    <b-collapse
        class="card"
        :open="false"
        v-for="(link, n) in links"
        :key="link.id"
    >
      <div
          class="card-header"
          slot="trigger"
          slot-scope="props"
      >
        <p class="card-header-title">
          {{link.name}}
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'caret-up' : 'caret-down'">
          </b-icon>
        </a>
      </div>

      <div class="card-content">
        <menu-link-edit :link="getEditableLink(n)"></menu-link-edit>
      </div>
    </b-collapse>
  </div>
</template>
<script>
  import MenuLinkEdit from '../../../common/CategoryEdit.vue';
  export default {
    props: ['links'],
    components: {
      MenuLinkEdit,
    },
    computed: {
      clonedLinks() {
        return [...this.links];
      },
    },
    methods: {
      getEditableLink(n) {
        return this.clonedLinks[n];
      },
    },
  }
</script>