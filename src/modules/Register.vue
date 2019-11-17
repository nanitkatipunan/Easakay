<template>
  <center>
    <div id="divFrom" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
      <form class="container">
        <center>
          <h1>Register</h1>
        </center>
        <hr>
        <div>
          <div class="row">
            <label for="inputfname" id="text">Username:</label>
            <input
              v-model="content.username"
              class="form-control"
              name="username"
              placeholder="Enter Username"
            >
          </div>
          <br>
          <div class="row">
            <br>
            <label for="inputEmail" id="text">Email:</label>
            <input type="email" class="form-control" v-model="content.email" placeholder="Enter Email">
          </div>
          <br>
          <div class="row">
            <label for="inputPassword" id="text">Password:</label>
            <input
              type="password"
              v-model="content.password"
              class="form-control"
              name="password"
              id="inputPassword4"
              placeholder="Password"
            >
            <span></span>
            <br>
            <br>
          </div>
          <div class="row">
            <label for="inputConPassword" id="text">Confirm Password:</label>
            <input
              type="password"
              class="form-control"
              id="inputConPassword"
              placeholder="Confirm Password"
            >
            <span></span>
            <br>
            <br>
          </div>
        </div>
        <button
          id="btnSubmit"
          type="submit"
          class="btn btn-primary"
          @click="submit"
        >
          <h6>Register</h6>
        </button>
        <br>
        <p id="had">Already have an account?</p>
        <router-link to="/Login">Login</router-link>
        <br>
      </form>
    </div>
  </center>
</template>
<style scoped lang="scss">
@import"assets/style.scss";
 #text{
  color: $white !important;
 }

#had{
  color: $primary !important;
}
</style>
<script>
// import ROUTER from "router";
import AUTH from "services/auth";
// import ROUTER from "router";
import jquery from "jquery";
export default {
  data() {
    return {
      auth: AUTH,
      content: {
        username: "",
        email: "",
        password: "",
        conpassword: ""
      }
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      sessionStorage.setItem("Username", this.content.username),
        sessionStorage.setItem("Email", this.content.email),
        sessionStorage.setItem("Password", this.content.password),
        AUTH.register(this.content.username, this.content.password);
        let link = `http://localhost:3000/db/insert/${this.content.username}/${this.content.email}/${this.content.password}`;
      jquery
        .ajax({
          url: link,
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => {
          alert(response.username);
        });
    }
  }
};
</script>

      
      