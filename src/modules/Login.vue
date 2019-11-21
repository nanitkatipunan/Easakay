<template>
  <div id="background" style="padding-top:20px;">
    <Navigation/>
    <center>
      <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
        <form class="container">
          <center>
            <h1>Login</h1>
          </center>
          <hr>
          <div class="row">
            <label id="username" for="loginUsername">Username:</label>
            <input
              required
              v-model="username"
              name="username"
              class="form-control"
              placeholder="Enter Username"
            >
            <br>
          </div>
          <br>
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
            >
          </div>
          <br>
          <button id="btnLogin" class="btn btn-outline-primary" @click="submit">
            <h6>Login</h6>
          </button>
          <br>
          <br>
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
import Navigation from "@/components/frame/Navigation";
import axios from "axios";
import AUTH from "services/auth";
import jquery from "jquery";
export default {
  components: {
    Navigation
  },
  data() {
    AUTH;
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      AUTH.login(this.username, this.password);

      //let link= `http://localhost:8082/user/login`;
      let data = {
        username: this.username,
        password: this.password
      };
      axios
        .post("http://localhost:8082/user/login", {
          data
        })
        .then(response => {
          let AUTH = response.data.AUTH;
          //localStorage.setItem('user',JSON.stringify(response.data.data))
          localStorage.setItem("jwt", response.data.token);
          if (localStorage.getItem("jwt") != null) {
            if (AUTH == true) {
              this.$router.push("/Dashboard");
            }
          }else{
             this.$router.push("/");
          }
        })
        .catch(err => {
          console.log('errorrrr ')
          console.log(err);
        });
      // jquery
      //   .ajax({
      //     url: link,
      //     method: 'GET',
      //     headers: {
      //       'Access-Control-Allow-Origin': '*'
      //     }
      //   })
      //   .then(response => {
      //     alert(response.username);
      //   })
    }
  }
};
</script>