<template>
  <div>
    <div class="regrow">
      <div class="col-sm-4 offset-sm-4">
        <div class="regcontainer">
          <center>
            <h2 class="card-header">Register</h2>
          </center>
          <form @submit.prevent="handleSubmit">
            <br>
            <br>
            <div class="form-group">
              <input
                type="text"
                v-model="user.username"
                id="username"
                name="username"
                class="form-control"
                placeholder="Username"
                :class="{ 'is-invalid': submitted && $v.user.username.$error }"
              >
              <div
                v-if="submitted && !$v.user.username.required"
                class="invalid-feedback"
              >Username is required</div>
            </div>
            <br>
            <div class="form-group">
              <input
                type="email"
                v-model="user.email"
                id="email"
                name="email"
                class="form-control"
                placeholder="Email Address"
                :class="{ 'is-invalid': submitted && $v.user.email.$error }"
              >
              <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                <span v-if="!$v.user.email.required">Email is required</span>
                <span v-if="!$v.user.email.email">Email is invalid</span>
              </div>
            </div>
            <br>
            <div class="form-group">
              <input
                type="password"
                v-model="user.password"
                id="password"
                name="password"
                class="form-control"
                placeholder="Password"
                :class="{ 'is-invalid': submitted && $v.user.password.$error }"
              >
              <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                <span v-if="!$v.user.password.required">Password is required</span>
                <span v-if="!$v.user.password.minLength">Password must be at least 8 characters</span>
              </div>
            </div>
            <br>
            <div class="form-group">
              <input
                type="password"
                v-model="user.confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                class="form-control"
                placeholder="Confirm Password"
                :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
              >
              <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
              </div>
            </div>
            <br>
            <div class="form-group">
              <center>
                <button class="btn btn-outline-primary">Register</button>
              </center>
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.regrow {
  margin-top: 2%;
  margin-left: 10%;
  margin-right: 10%;
  border-color: black;
}
.regcontainer {
  border: black;
}
</style>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      submitted: false
    };
  },
  validations: {
    user: {
      username: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let data = {
        username: this.user.username,
        password: this.user.password,
        email: this.user.email
      }
     
      this.$store.dispatch('registerAsync', { data })
        .then(() => this.$router.push('/login'))
        .catch(err => console.log(err))
    }
  }
};
</script>