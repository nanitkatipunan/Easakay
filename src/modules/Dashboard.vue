<template>
  <b-card>
    <div class="bv-example-row" id="jumbo" bg-variant="white" text-variant="black">
      <b-row>
        <b-col>
          <div class="col-lg-12">
            <b-form-input
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
              @input.native="filter"
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
              @input.native="filterbytime"
              aria-describedby="input-live-help input-live-feedback"
            ></b-form-input>
          </div>
        </b-col>
        <b-col>
          <div class="col-lg-12">
            <b-button variant="outline-success">Search</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <br>

    <!-- BUS COMPONENT HERE!! -->
    <div v-if="filtering">
      <BusList v-bind:buses="filterArray"/>
      <div v-if="filterArray.length == 0"><center><br><br>
      <h1>No available bus</h1></center></div>
    </div>
    <div v-else-if="filteringbytime">
      <BusList v-bind:buses="filterArrayBytime"/>
      <div v-if="filterArrayBytime.length == 0"><center><br><br>
      <h1>No available bus</h1></center></div>
    </div>
    <div v-else>
      <BusList v-bind:buses="buses"/>
    </div>
    <Modal v-bind:bus="busInModal" v-bind:show="showModal" @close="showModal = false"/>
  </b-card>
</template>

<script>
import BusList from "../components/BusList.vue";
import Modal from "../components/Modal.vue";
// import { EventBus } from "../main";
import axios from 'axios';

export default {
  components: {
    BusList,
    Modal
  },
  data() {
    return {
      from: "Southbus Terminal",
      to: "",
      depart: "",
      showModal: false,
      busInModal: { busRoute: {} },
      filterArray: [],
      filterArrayBytime: [],
      filtering: false,
      filteringbytime: false,
      buses: []
    };
  },
  methods: {
    defaultFilter(){

      // let search = {};
      
      if (this.to != "") {
        this.filtering = true;
      }
      if (this.depart != "") {
        this.filtering = true;
      }


      axios({url: 'http://localhost:8082/search',data:{ }, method: 'GET' })
				.then(resp => {
            // console.log(resp.data.buses);
            this.buses = resp.data.buses;
				})
				.catch(err => {
					console.log(err)
				})

    },
    filter() {
      if (this.to != "") {
        this.filtering = true;
      }

      let way = this.to.toLowerCase();
      let size = way.length;
      var tempArray = [];
      this.buses.forEach(element => {
        let busRT = element.busRoute.to.toLowerCase();
        if (way == busRT.slice(0, size)){
          tempArray.push(element);
        }
      });
      this.filterArray = tempArray;
    },
    filterbytime() {
      if (this.depart != "" && this.filterArray.length != 0) {
        this.filteringbytime = true;
        this.filtering = false;
      }
      let way = this.depart.toLowerCase();
      var tempArray = [];
      this.filterArray.forEach(element => {
        let dtime = element.departureTime.toLowerCase();
        if (dtime.includes(way)){
          tempArray.push(element);
        }
      });
      this.filterArrayBytime = tempArray;
    },
    getTicket() {
      console.log("getTicket");
    }
  
  
  
  
  
  
  },
  // mounted() {
  //   EventBus.$on("displayBusDataOnModal", data => {
  //     this.busInModal = data;
  //     this.showModal = true;
  //   });
  // },
  // search() {}
  created(){
    axios({url: 'http://localhost:8082/buses', method: 'GET' })
				.then(resp => {
            // console.log(resp.data.buses);
            this.buses = resp.data.buses;
				})
				.catch(err => {
					console.log(err)
				})
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