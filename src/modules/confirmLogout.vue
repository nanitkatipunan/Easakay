
<template>
  <div id="card">
      <center>
    <h1>Are you sure you want to log out?</h1>
    <b-button @click="logout" variant="success">Yes</b-button>&nbsp;
    <b-button @click="cancel" variant="danger">No</b-button>
    </center>
  </div>
</template>
<style scoped>
#card {
  max-width: 50%;
  margin-left: 25%;
  margin-top: 10%;
}
</style>

<script>
import AUTH from "services/auth";
import ROUTER from "router";
export default {
  data(){
    return{
      auth: AUTH,
    }
  }, 
  methods: {
    logout(e){
      e.preventDefault()
 AUTH.logout();
    },
    cancel(){
      ROUTER.push('/Dashboard')
    }

     
      // ROUTER.push("/login");
    }
  
};
</script>