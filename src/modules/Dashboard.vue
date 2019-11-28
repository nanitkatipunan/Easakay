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

    <BusList v-bind:buses="buses" />
    <Modal v-bind:bus="busInModal" v-bind:show="showModal" @close="showModal = false" />
  </b-card>
</template>

<script>
import BusList from "../components/BusList.vue";
import Modal from "../components/Modal.vue";
import { EventBus } from "../main";
export default {
  components: {
    BusList,
    Modal
  },
  data() {
    var currentDate = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "-");
    return {
      from: "",
      to: "",
      depart: "",
      showModal: false,
      busInModal: { busRoute: {} },
      buses: [
        {
          busId: 1,
          name: "Sunrays",
          image: require("assets/sunraysair.jpg"),
          image1: require('assets/iconbus.png'),
          plateNumber: "45211",
          busType: "Aircon",
          company: "Sunrays Bus Lines",
          departureTime: "05:00 PM",
          arrivalTime: "07:30 PM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Southbus Terminal",
            to: "Santander Liloan Port",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          dropdown: {
            adult: "Adult",
            senior: "Senior Citizen",
            student: "Student"
          },
          availableSeats: 56
        },
        {
          busId: 2,
          name: "Ceres",
          image: require("assets/ceresor.jpg"),
          image1: require('assets/iconbus.png'),
          plateNumber: "55778",
          busType: "Ordinary",
          company: "Ceres Liner",
          departureTime: "05:00 PM",
          arrivalTime: "07:30 PM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Soutbus Terminal",
            to: "Santander Liloan Port",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          availableSeats: 55
        },
        {
          busId: 3,
          name: "Ceres",
          image: require("assets/ceresair.jpg"),
          image1: require('assets/iconbus.png'),
          plateNumber: "99667",
          busType: "Aircon",
          company: "Ceres Liner",
          departureTime: "05:00 AM",
          arrivalTime: "12:00 PM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Southbus Terminal",
            to: "Argao",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          availableSeats: 41
        },
        {
          busId: 4,
          name: "Ceres",
          image: require("assets/ceres.jpg"),
          image1: require('assets/iconbus.png'),
          plateNumber: "71289",
          busType: "Aircon",
          company: "Ceres Liner",
          departureTime: "03:00 PM",
          arrivalTime: "10:30 PM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Southbus Terminal",
            to: "Moalboal via Carcar",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          availableSeats: 45
        },
        {
          busId: 5,
          name: "Ceres",
          image: require('assets/ceresairc.jpg'),
          image1: require('assets/iconbus.png'),
          plateNumber: "78542",
          busType: "Aircon",
          company: "Ceres Liner",
          departureTime:"04:00 PM",
          arrivalTime:"11:30 PM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Southbus Terminal",
            to: "Bato via Barili",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          availableSeats:45
        },
        {
          busId: 6,
          name: "Sunrays",
          image: require("assets/sunraysairc.jpg"),
          image1: require('assets/iconbus.png'),
          plateNumber: "58976",
          busType: "Aircon",
          company: "Sunrays Bus Lines",
          departureTime: "09:00 AM",
          arrivalTime: "04:30 PM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Soutbus Terminal",
            to: "Santander Liloan Port",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          availableSeats: 39
        },
        {
          busId: 7,
          name: "Ceres",
          image: require('assets/ceresord.jpg'),
          image1: require('assets/iconbus.png'),
          plateNumber: "52345",
          busType: "Ordinary",
          company: "Ceres Liner",
          departureTime:"01:00 PM",
          arrivalTime:"12:00 Mid",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Southbus Terminal",
            to: "Bato via Oslob",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          availableSeats:41
        },
        {
          busId: 8,
          name: "Sunrays",
          image: require("assets/sunrays.jpg"),
          image1: require('assets/iconbus.png'),
          plateNumber: "80123",
          busType: "Aircon",
          company: "Sunrays Bus Lines",
          departureTime: "07:00 AM",
          arrivalTime: "10:30 AM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Southbus Terminal",
            to: "Alcoy",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          availableSeats: 55
        },
        {
          busId: 9,
          name: "Sunrays",
          image: require("assets/sunraysexp.jpg"),
          image1: require('assets/iconbus.png'),
          plateNumber: "78542",
          busType: "Ordinary",
          company: "Sunrays Bus Lines",
          departureTime: "01:00 PM",
          arrivalTime: "08:30 PM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Southbus Terminal",
            to: "Liloan Port",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
          },
          availableSeats: 39
        },
        {
          busId: 10,
          name: "Sunrays",
          image: require("assets/sunraysord.jpg"),
          image1: require('assets/iconbus.png'),
          plateNumber: "18956",
          busType: "Ordinary",
          company: "Sunrays Bus Lines",
          departureTime: "04:00 AM",
          arrivalTime: "08:30 PM",
          departureDate: currentDate,
          rlink: "Router Details",
          fare: "Estimated Fare Php 120.00 - Php 180.00",
          busRoute: {
            from: "Southbus Terminal",
            to: "Samboan via Oslob",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"

          },
          
            
          availableSeats: 45
        },
      ]
    };
  },
  methods: {
    getTicket() {
      console.log("getTicket");
    }
  },
  mounted() {
    EventBus.$on("displayBusDataOnModal", data => {
      this.busInModal = data;
      this.showModal = true;
    });
  },
  search() {}
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