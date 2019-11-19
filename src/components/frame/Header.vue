<template>
  <div fixed="top">
    <b-card no-body >
      <b-card-header header-tag="nav" class="bg-success" >
        <b-nav class="card-header tabs">
          <b-nav id="Logotext" v-if="auth.user != null">Easakay</b-nav>

          <b-nav
            @click="redirect('/Login')"
            v-if="auth.user ===null"
            id="text"
            type="button"
            class="btn btn-primary"
          >&nbsp;&nbsp;Sign In</b-nav>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b-nav
            @click="redirect('/Register')"
            v-if="auth.user ===null"
            id="text"
            type="button"
            class="btn btn-primary"
          >&nbsp;&nbsp;Sign Up</b-nav>
        </b-nav>
      </b-card-header>
    </b-card>
  </div>
</template>
<style scoped >
/* // @import "assets/style.scss"; */
#text {
  color: white;
  font-size: 20px;
}
.card-header tabs {
  padding-bottom: 50%;
  padding-top: 50%;
}
#Logotext {
  color: white;
  font-size: 20px;
  font-style: Impact, Charcoal, sans-serif;
  font-weight: bold;
}
</style>
<script>
import AUTH from "services/auth";
import ROUTER from "router";
export default {
  data() {
    return {
      auth: AUTH
    };
  },
  methods: {
    redirect(router) {
      ROUTER.push(router);
    }
  }
};
</script>
