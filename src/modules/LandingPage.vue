<template>
  <b-card>
    <div class="bv-example-row" id="container1" bg-variant="white" text-variant="black">
      <b-row>
        <b-col>
          <div class="col-lg-12">
            <p id="p" class="text-center">
              "Value everyone's comfort
              <br />in the world
              <br />of travel"
            </p>
          </div>
        </b-col>
        <b-col>
          <div class="col-lg-12">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              img-width="1024"
              img-height="480"
            >
              <b-carousel-slide
                img-src="https://www.panaynews.net/wp-content/uploads/2019/07/cropped-Yanson-Group-of-Bus-Companies-Ceres-Bus-3-696x391.jpg"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="https://farm1.static.flickr.com/958/40036003070_8e2868fc80.jpg"
              ></b-carousel-slide>
              <b-carousel-slide img-src="https://www.travelingcebu.com/images/csbt2.jpg"></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
    </div>
    <br />
    <br />
    <center>
      <button id="show-btn" @click="$bvModal.show('bv-modal-example')">Learn more</button>
    </center>
    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        <router-link to="/">Easakay</router-link>
      </template>
      <div class="d-block text-center">
        <h3>Easakay is a web application that caters the need</h3>
      </div>
      <b-button class="bg-success" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
    </b-modal>
  </b-card>
</template>
<style>
#container1 {
  background-size: cover;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUksk7fqXNLAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC");
  border: solid green 2px;
  margin-right: 1px;

  padding-top: 1%;
  width: 100%;
  padding-bottom: 1%;
}
#p {
  font-size: 50px;
  margin-top: 10%;
  font-style: verdana;
  font-weight: bold;
}
#show-btn {
  background-color: green;
  color: white;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 10%;
}
div {
  position: cover;
}
</style>