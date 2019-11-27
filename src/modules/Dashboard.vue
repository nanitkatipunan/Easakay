<template>
  <b-card>
    <div class="bv-example-row" id="jumbo" bg-variant="white" text-variant="black">
      <b-row>
        <b-col>
          <div class="col-lg-12">
            <b-form-input
              placeholder="From"
              id="input-live"
              v-model="from"
              aria-describedby="input-live-help input-live-feedback"
            ></b-form-input>
          </div>
        </b-col>
        <b-col>
          <div class="col-lg-12">
            <b-form-input
              placeholder="To"
              id="input-live"
              v-model="to"
              aria-describedby="input-live-help input-live-feedback"
            ></b-form-input>
          </div>
        </b-col>
        <b-col>
          <div class="col-lg-12">
            <b-form-input
              placeholder="Depart Time"
              id="input-live"
              v-model="depart"
              aria-describedby="input-live-help input-live-feedback"
            ></b-form-input>
          </div>
        </b-col>
        <b-col>
          <div class="col-lg-12">
            <b-form id="b-button">
              <b-button variant="outline-success">SEARCH</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </div>
    <br />

    <!-- BUS COMPONENT HERE!! -->

    <BusList v-bind:buses="buses"/>

  </b-card>
</template>

<script>
import BusList from '../components/BusList.vue';

export default {
  components:{
    BusList
  },
  data() {
    return {
      from: "",
      to: "",
      depart: "",
      buses: [
        {
          busId: 1,
          name: "Sunrays",
          image: "http://via.placeholder.com/150x100",
          plateNumber: "4521",
          busType: "Aircon",
          company: "Sunrays Bus Lines",
          departureTime:"05:00 PM",
          arrivalTime:"07:30 PM",
          departureDate: "November 10, 2019",
          busRoute: {
            from: "Santander",
            to: "Liloan Port"
          },
          availableSeats:56
        },
        {
          busId: 1,
          name: "Sunrays",
          image: "http://via.placeholder.com/150x100",
          plateNumber: "55778",
          busType: "Regular",
          company: "Ceres Bus Lines",
          departureTime:"05:00 PM",
          arrivalTime:"07:30 PM",
          departureDate: "November 10, 2019",
          busRoute: {
            from: "Santander",
            to: "Liloan Port"
          },
          availableSeats:36
        },
        {
          busId: 1,
          name: "Sunrays",
          image: "http://via.placeholder.com/150x100",
          plateNumber: "99667",
          busType: "Regular",
          company: "Sunrays Bus Lines",
          departureTime:"05:00 PM",
          arrivalTime:"07:30 PM",
          departureDate: "November 10, 2019",
          busRoute: {
            from: "Santander",
            to: "Liloan Port"
          },
          availableSeats:41
        }
      ]
    };
  }
};
</script>


<style>
#image {
  height: 100px;
  width: 150px;
}
#b-getTicket {
  margin-left: 5%;
}
#jumbo {
  margin-right: 0%;
  margin-left: 0%;
  margin-top: 0%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-right: 2%;
  padding-left: 2%;
  border: solid green 1px;
}
#jumbo1 {
  margin-right: 0%;
  margin-left: 0%;
  margin-top: 0%;
  padding-top: 1%;
  padding-bottom: 0%;
  padding-right: 2%;
  padding-left: 2%;
  border: solid green 1px;
}
#b-button {
  margin-top: 0%;
}
#b-getTicket {
  margin-left: 30%;
}
</style>