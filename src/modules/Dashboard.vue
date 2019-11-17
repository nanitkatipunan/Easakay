<template>
 <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">

 
 <b-container class="bv-example-row">
  <b-row>
    <b-col> <div class="col-md-12">
    <label for="input-live">From</label>
    <b-form-input
      id="input-live"
      v-model="name"
      aria-describedby="input-live-help input-live-feedback"
    ></b-form-input>
</div></b-col>
    <b-col> <div class="col-md-12">
    <label for="input-live">To</label>
    <b-form-input
      id="input-live"
      v-model="name"
      aria-describedby="input-live-help input-live-feedback"
    ></b-form-input>
</div></b-col>
  <b-col>
<div class="col-md-12">
    <label for="input-live">Depart Time</label>
    <b-form-input
      id="input-live"
      v-model="name"
      aria-describedby="input-live-help input-live-feedback"
    ></b-form-input>
</div>
</b-col>


  </b-row><br>


</b-container>
</b-jumbotron>

</template>
<script>
  export default {
    computed: {
      nameState() {
        return this.name.length > 2 ? true : false
      }
    },
    data() {
      return {
        name: ''
      }
    }
  }
</script>
