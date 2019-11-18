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
      <br>
    </b-container>
    <div>
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-item>Third Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>
    
  </b-jumbotron>
</template>


<style scoped>
#header {
  margin-top: 1%;
  padding-bottom: 2%;
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
