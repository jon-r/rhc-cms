<template>
    <div>
        <h1>Users</h1>

        <hr/>

        <div v-for="(user, i) in users" style="margin-bottom: 5px;" :key="i">
            {{ user.username }}

            <span style="float:right;">
                <a v-on:click="impersonate(user)" href="javascript:void(0);">impersonate</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      context: 'users context',
      users: null,
    };
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    getUsers() {
      this.$http({
        url: 'users',
        method: 'GET',
      })
        .then((res) => {
          this.users = res.data.values.items;

          console.log(`success ${this.context}`, res);
        }, (res) => {
          console.log(`error ${this.context}`, res);
        });
    },

    impersonate(user) {
      this.$auth.impersonate({
        params: {
          id: user.id,
        },
        success() {
          console.log(`success ${this.context}`);
        },
        error() {
          console.log(`error ${this.context}`);
        },
        redirect: '/account',
      });
    },
  },
};
</script>
