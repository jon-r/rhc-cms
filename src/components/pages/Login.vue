<template>
  <div class="container">
  <div class="columns is-centered">
    <page-tile title="Login" class="is-medium column is-half">
      <form v-on:submit.prevent="login()" >
        <h3 class="subtitle"><b>Test users:</b> (admin / secret)</h3>

        <b-field label="Name" horizontal>
          <b-input v-model="data.body.username" size="is-medium" icon="user"></b-input>
        </b-field>

        <b-field label="Password" horizontal>
          <b-input type="password" v-model="data.body.password" size="is-medium" icon="key" password-reveal></b-input>
        </b-field>

        <b-field horizontal>
          <button class="button is-primary is-medium" type="submit">Submit</button>
        </b-field>

        <b-message type="is-danger" v-show="error" has-icon>
          {{error}}
        </b-message>
      </form>
    </page-tile>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      context: 'login context',

      data: {
        body: {
          username: 'admin',
          password: 'secre',
        },
        rememberMe: false,
        fetchUser: true,
      },

      error: null,
    };
  },

  mounted() {
    console.log(this.$auth.redirect());
    // Can set query parameter here for auth redirect or just do it silently in login redirect.
  },

  methods: {
    login() {
      const redirect = this.$auth.redirect();

      this.$auth.login({
        data: this.data.body, // Axios
        rememberMe: this.data.rememberMe,
        redirect: {
          name: redirect ? redirect.from.name : 'admin',
        },
        fetchUser: this.data.fetchUser,
      })
        .then(() => {
          console.log(`success ${this.context}`);
          console.log(this.$auth.redirect());
        }, (err) => {
          this.error = err.response.data.msg;
        });
    },
  },
};
</script>
