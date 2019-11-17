<template>
  <div id="container">
    <div class="jumbotron">
      <h1>Personal Information</h1>
    </div>
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img id="image" :src="require('assets/user.jpg')" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Personal Info">
                <hr>
              <b-card-text>
                <h6>Username: {{username}}</h6>
                <h6>Email: {{email}}</h6>
                <h6 type="password">Password: {{password}}</h6>
              </b-card-text>
              <center><p id="edit">Do you want to edit your account?</p >
              <router-link to="/Update">Update Profile</router-link></center>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/style.scss";
.jumbotron{
    padding: $jumbotronpadding !important;
    text-align: $text-align !important;
    background-color:$jumbo !important;
}
#card {
  margin-top: $cardmargintop !important;
  margin-left: $cardmarginleft !important;
}
#edit{
  color: $danger !important
}

#image {
  width: $userwidth !important;
  height: $userheight !important;
}
</style>
<script>
import AUTH from 'services/auth'
export default {
  data() {
    return {
      username: sessionStorage.getItem("Username"),
      email: sessionStorage.getItem("Email"),
      password: sessionStorage.getItem("Password")
    };
  },
  methods: {
    update: function(){
      AUTH.update(this.username,this.email, this.password)
    }
  }
};
</script>