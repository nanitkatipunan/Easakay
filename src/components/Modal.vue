<template>
  <transition name="modal">
    <b-modal id="modal-xl" size="xl" title="Easakay" style="text-align: center">
      <br>
      <b-img id="image" thumbnail fluid :src="bus.image" alt="Image 1"></b-img>
      <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
        <b-row>
          <div class="col-sm-2">
            <h2 style="font-size:150%;text-align:center">{{ bus.name }}</h2>
            <hr>
            <h5 style="text-align:center">{{ bus.departureTime}}</h5>
            <b-img id="image1" thumbnail fluid :src="bus.image1" alt="Image 1"></b-img>
            <h5 style="text-align:center">{{bus.arrivalTime}}</h5>
          </div>
          <div class="col-sm-7">
            <br>
            <br>
            <br>
            <br>
            <p>
              From: {{bus.busRoute.from}}
              <br>
              <br>
              Address: {{bus.busRoute.address}}
              <br>
              <br>
              To: {{bus.busRoute.to}}
            </p>
          </div>
          <div class="col-sm-2">
            <h5 class="text-center">{{ bus.availableSeats }} Seats</h5>
            <hr>
          </div>
        </b-row>
      </div>

      <br>
      <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
        <b-row>
          <b-col sm="2">
            <b-form-select
              variant="outline-success"
              aria-labelledby="dropdownMenuButton"
              v-model="selectedItem"
            >
              <option value="Adult">Adult</option>
              <option value="Senior Citizen">Senior Citizen</option>
              <option value="Student">Student</option>
              <div>
                <strong>{{ selectedItem }}</strong>
              </div>
            </b-form-select>
          </b-col>
          <div class="col-sm-3">
            <p>Number of Passengers</p>
            <b-input-group>
              <b-input-group-prepend> 
                <b-btn variant="outline-success" @click="decrement()">-</b-btn>
              </b-input-group-prepend>
              <b-form-input type="number" min="0.00" :value="num"></b-form-input>
              <b-input-group-append>
                <b-btn variant="outline-success" @click="increment()">+</b-btn>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div class="col-sm-5">
            <p>{{ bus.fare }}</p>
          </div>
          <div class="col-sm-2">
            <router-link to="/RouterDetails">{{ bus.rlink }}</router-link>
          </div>
        </b-row>
      </div>
    </b-modal>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      num: 1
    };
  },
  selectedItem: "",
  props: ["show", "bus"],
  methods: {
    increment() {
      this.num++;
    },
    decrement() {
      if (this.num === 1) {
        alert("Negative quantity not allowed");
      } else {
        this.num--;
      }
    }
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