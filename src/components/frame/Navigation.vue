<template>
    <div fixed="top">
     <b-navbar toggleable="lg" type="dark" variant="success">
    <router-link to="/"><b-navbar-brand id="Logotext">Easakay</b-navbar-brand></router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

       <b-nav 
            @click="redirect('/Login')"
            v-if="auth.user ===null"
            id="text"
            type="button"
            class="ml-auto"
          ><b-button variant="success">Sign In</b-button></b-nav>
          <b-nav
            @click="redirect('/Register')"
            v-if="auth.user ===null"
            type="button"
          ><b-button variant="success"> Sign Up </b-button></b-nav>
    </b-collapse>
      <!-- Right aligned nav items -->
     </b-navbar>
  </div>
</template>

