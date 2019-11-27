<template>
  <div fixed="top">
     <b-navbar toggleable="lg" type="dark" variant="success">
    <router-link to="/"><b-navbar-brand id="Logotext">Easakay</b-navbar-brand></router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

       <b-nav 
            @click="redirect('/Login')"
            v-if="!this.$store.getters.isLoggedIn"
            id="text"
            type="button"
            class="ml-auto"
          ><b-button variant="success">Sign In</b-button></b-nav>&nbsp;
          <b-nav
            @click="redirect('/Register')"
            v-if="!this.$store.getters.isLoggedIn"
            type="button"
          ><b-button variant="success"> Sign Up </b-button></b-nav>
    
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" v-if="this.$store.getters.isLoggedIn" >
        <b-nav-item v-b-popover.hover.top=""  @click="goToHome" title="Home">
            <i class="fas fa-home  fa-lg"></i>
        </b-nav-item>
        <b-nav-item>
           <i class="fas fa-map-marker-alt fa-lg"  v-b-popover.hover.top="" title="Track Location"></i>
        </b-nav-item>
        <b-nav-item>
           <i class="fas fa-bell fa-lg"  v-b-popover.hover.top="" title="Notification"></i>
        </b-nav-item>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <i class="fas fa-user fa-lg"></i>
          </template>
          <b-dropdown-item href="#"><router-link to="/PersonalInfo"> Profile </router-link></b-dropdown-item>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: true
    };
  },
  methods: {
    redirect(route) {
      this.$router.push(route)
    },
    logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    },
    goToHome(){
       this.$router.push('/dashboard')
    }
  }
};
</script>


<style scoped >
/* // @import "assets/style.scss"; */
#no{
  color: white;
  margin-top: -2%;
  margin-left: 96%;
}
#not{
  color: white;
  margin-top: -2%;
  margin-left: 86%;
}
#user{
  margin-top: -2%;
  margin-left: 95%;
  color: white;
}
#a{
color: aliceblue;
 
}
#tr{
  color: white;
  margin-left: 75%;
  margin-top: -2%;
}
#home{
  color:white;
  margin-left: 60%;
    margin-top: 1%;
}
#tl{
  margin-right: 1000px;
  color: white;
}
/* #text {
  color: white;
  font-size: 15px;
} */
.card-header tabs {
  padding-bottom: 50%;
  padding-top: 50%;
}
#Logotext {
  color: white;
  font-size: 20px;
  font-style: Impact, Charcoal, sans-serif;

}
</style>

