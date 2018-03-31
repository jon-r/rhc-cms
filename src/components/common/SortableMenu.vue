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
        {{editableLinks[n].slug}}
      </div>
    </b-collapse>
  </div>
</template>
<script>
  export default {
    props: ['links'],
    computed: {
      editableLinks: {
        get() {
          return [...this.links];
        },
      },
    },
  }
</script>