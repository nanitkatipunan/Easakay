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

    <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
      <b-row>
        <div class="col-sm-2">
          <b-img
            id="image"
            thumbnail
            fluid
            src="https://goasiadaytrip.com/blog/wp-content/uploads/2017/07/Ceres-Liner-bus.jpg"
            alt="Image 1"
          ></b-img>
          <p class="text-center">Ceres Tours 5048 . Aircon</p>
        </div>
        <div class="col-sm-3">
          <h5 class="text-center">Ceres Liner</h5>
          <hr /><br>
            <p>Departure Time: 01:00 PM <br>Arrival Time: 08:30 PM <br>Date: November 10, 2019</p>
        </div>
        <div class="col-sm-5">
          <h5 class="text-center">Bato via Barili</h5>
          <hr />
        </div>
        <div class="col-sm-2">
          <h5 class="text-center">55 Seats</h5>
          <hr /><br><br>
          <b-form id="b-getTicket">
              <b-button variant="outline-success">Get Ticket</b-button>
            </b-form>
        </div>
      
      </b-row>
    </div>
    <hr />

    <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
      <b-row>
        <div class="col-sm-2">
          <b-img
            id="image"
            thumbnail
            fluid
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAjPfETTvf_pAy4ULMQbWEx3HYSZ3_7487Qa1zGP7nZGxSn2y9A&s"
            alt="Image 1"
          ></b-img>

          <p class="text-center">Sunrays 4521 . AirCon</p>
        </div>
        <div class="col-sm-3">
          <h5 class="text-center">Sunrays Bus Lines</h5>
          <hr /><br>
            <p>Departure Time: 05:00 PM <br>Arrival Time: 07:30 PM <br>Date: November 10, 2019</p>
        </div>
        <div class="col-sm-5">
          <h5 class="text-center">Santander Liloan Port</h5>
          <hr />
        </div>
        <div class="col-sm-2">
          <h5 class="text-center">56 Seats</h5>
          <hr /><br><br>
          <b-form id="b-getTicket">
              <b-button variant="outline-success">Get Ticket</b-button>
            </b-form>
        </div>
      </b-row>
    </div>
    <hr />

    <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
      <b-row>
        <div class="col-sm-2">
          <b-img
            id="image"
            thumbnail
            fluid
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1-pdn-qsvNGYTjyyS8-Y6rmlo38ioZVTsuTJcpp8xa0jYy3q&s"
            alt="Image 1"
          ></b-img>

          <p class="text-center">Sunrays 8071 . Ordinary</p>
        </div>
        <div class="col-sm-3">
          <h5 class="text-center">Sunrays Bus Line</h5>
          <hr /><br>
            <p>Departure Time: 06:00 PM <br>Arrival Time: 03:30 PM <br>Date: November 10, 2019</p>
        </div>
        <div class="col-sm-5">
          <h5 class="text-center">Samboan/Oslob</h5>
          <hr />
        </div>
        <div class="col-sm-2">
          <h5 class="text-center">56 Seats</h5>
          <hr /><br><br>
          <b-form id="b-getTicket">
              <b-button variant="outline-success">Get Ticket</b-button>
            </b-form>
        </div>
      </b-row>
    </div>
<hr>
    <div class="bv-example-row" id="jumbo1" bg-variant="white" text-variant="black">
      <b-row>
        <div class="col-sm-2">
          <b-img
            id="image"
            thumbnail
            fluid
            src="http://selfplannedtrip.com/wp-content/uploads/2014/11/selfplannedtrip-ceres-bus.jpg"
            alt="Image 1"
          ></b-img>

          <p class="text-center">Ceres Tours 4271 . Ordinary</p>
        </div>
        <div class="col-sm-3">
          <h5 class="text-center">Ceres Liner</h5>
          <hr /><br>
            <p>Departure Time: 01:00 PM <br>Arrival Time: 03:30 PM <br>Date: November 10, 2019</p>
        </div>
        <div class="col-sm-5">
          <h5 class="text-center">Batao via Oslob</h5>
          <hr />
        </div>
        <div class="col-sm-2">
          <h5 class="text-center">40 Seats</h5>
          <hr /><br><br>
          <b-form id="b-getTicket">
              <b-button variant="outline-success">Get Ticket</b-button>
            </b-form>
        </div>
      </b-row>
    </div>
  </b-card>
</template>


<style scoped>
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
  border: solid green 2px;
}
#jumbo1 {
  margin-right: 0%;
  margin-left: 0%;
  margin-top: 0%;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-right: 2%;
  padding-left: 2%;
  border: solid green 2px;
}
#b-button {
  margin-top: 0%;
}
#b-getTicket{
  margin-left: 30%;
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
      from: "",
      to: "",
      depart: ""
    };
  }
};
</script>
