<template>
  <b-jumbotron id="header" bg-variant="white" text-variant="black">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="col-md-12">
            <label for="input-live">From</label>
            <b-form-input
              id="input-live"
              v-model="from"
              aria-describedby="input-live-help input-live-feedback"
            ></b-form-input>
          </div>
        </b-col>
        <b-col>
          <div class="col-md-12">
            <label for="input-live">To</label>
            <b-form-input
              id="input-live"
              v-model="to"
              aria-describedby="input-live-help input-live-feedback"
            ></b-form-input>
          </div>
        </b-col>
        <b-col>
          <div class="col-md-12">
            <label for="input-live">Depart Time</label>
            <b-form-input
              id="input-live"
              v-model="depart"
              aria-describedby="input-live-help input-live-feedback"
            ></b-form-input>
          </div>
        </b-col>
        <b-col>
          <div class="col-md-12">
            <b-button id="b-button" variant="outline-success">SEARCH</b-button>
          </div>
        </b-col>
      </b-row>

    
    <b-row>
    <b-col>
      <b-dropdown id="dropdown-dropright" dropright text="Passengers" class="m-md-2">
        <b-dropdown-item>Adult</b-dropdown-item>
        <b-dropdown-item>Student</b-dropdown-item>
        <b-dropdown-item>Senior Citizen</b-dropdown-item>
      </b-dropdown>
      </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>
</template>


<style scoped>
#header {
  margin-top: 1%;
  padding-bottom: 1%;
  padding-top: 2%;
  border: solid green 2px;
}
#b-button {
  margin-top: 13%;
}
</style>


<script>
export default {
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    }
  },
  data() {
    return {
      name: ""
    };
  }
};
</script>
