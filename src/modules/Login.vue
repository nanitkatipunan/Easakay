<template>
  <div id="background" style="padding-top:20px;">
    <center>
      <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
        <form class="container" @submit.prevent="login">
          <center>
            <h1>Login</h1>
          </center>
          <hr />
          <div class="row">
            <label id="username" for="loginUsername">Username:</label>
            <input
              required
              v-model="username"
              name="username"
              class="form-control"
              placeholder="Enter Username"
            />
            <br />
          </div>
          <br />
          <div class="row">
            <label id="pass" for="loginPassword">Password:</label>
            <input
              required
              v-model="password"
              type="password"
              name="password"
              class="form-control"
              id="loginPassword"
              placeholder="Enter Password"
            />
          </div>
          <br />
          <button id="btnLogin" class="btn btn-outline-primary">
            <h6>Login</h6>
          </button>
          <br />
          <br />
        </form>
      </div>
    </center>
  </div>
</template>
<style scoped lang="scss">
@import "assets/style.scss";

#username {
  color: $white !important;
}
#pass {
  color: $white !important;
}
</style>
<script>
export default {
  data() {
    return {
      username: this.username,
      password: this.password
    };
  },
  methods: {
    login: function() {
      let username = this.username 
      let password = this.password
      this.$store.dispatch('loginAsync', { username, password })
        .then(() => this.$router.push('/dashboard'))
        .catch(err => console.log(err))
    }
  }
};
</script>