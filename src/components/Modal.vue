<template>
  <transition name="modal">
    <b-modal id="modal-xl" size="xl" title="Easakay" style="text-align: center">
      <br />
      <b-img id="image" thumbnail fluid :src="bus.image" alt="Image 1"></b-img>
      <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
        <b-row>
          <div class="col-sm-2">
            <h2 style="font-size:150%;text-align:center">{{ bus.name }}</h2>
            <hr />
            <h5 style="text-align:center">{{ bus.departureTime}}</h5>
            <b-img id="image1" thumbnail fluid :src="bus.image1" alt="Image 1"></b-img>
            <h5 style="text-align:center">{{bus.arrivalTime}}</h5>
          </div>
          <div class="col-sm-7">
            <br />
            <br />
            <br />
            <br />
            <p>
              From: {{bus.busRoute.from}}
              <br />
              <br />
              Address: {{bus.busRoute.address}}
              <br />
              <br />
              To: {{bus.busRoute.to}}
            </p>
          </div>
          <div class="col-sm-2">
            <h5 class="text-center">{{ bus.availableSeats }} Seats</h5>
            <hr />
          </div>
        </b-row>
      </div>

        <br>
      <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
        <b-row>
        <div class="col-sm-2">
          <b-dropdown id="dropdown-1" variant="outline-success" text="Passenger" class="m-md-2">
            <b-dropdown-item>Adult</b-dropdown-item>
            <b-dropdown-item>Senior Citizen</b-dropdown-item>
            <b-dropdown-item>Student</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="col-sm-8">
          <p> {{ bus.fare }} </p>
        </div>
        <div class="col-sm-2">
          <b-link @click="redirect('/RouterDetails')"> {{ bus.rlink }} </b-link>
        </div>
        </b-row>
      </div>
    </b-modal>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["show", "bus"],
  methods: {

  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.modal-container {
  width: 500px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.text-right {
  text-align: right;
}
.form-label {
  display: block;
  margin-bottom: 1em;
}
.form-label > .form-control {
  margin-top: 0.5em;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
#image {
  height: 50%;
  width: 100%;
}
</style>