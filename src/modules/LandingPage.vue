<template>
  <b-card id="LargeContainer">
    <div class="bv-example-row" id="container1" bg-variant="white" text-variant="black">
      <b-row>
        <b-col>
          <div class="col-lg-12">
            <p id="p" class="text-center">
              "Value everyone's comfort
              <br>in the world
              <br>of travel"
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
              <b-carousel-slide img-src></b-carousel-slide>
              <b-carousel-slide img-src="https://www.travelingcebu.com/images/csbt2.jpg"></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
      </b-row>
    </div>
    <br>
    <br>
    <center>
      <b-button v-b-modal.modal-xl variant="outline-success">Learn More</b-button>
    </center>
    <b-modal id="modal-xl" size="xl" title="Easakay">
      <div class="d-block text-center">
        <div class="container">
          <div class ="card">
            <h2>Easakay is a web application that  allows passengers 
          to know the information of the bus such as bus location, bus route and 
         bus schedule. With Easakay, passengers can reserve seats with a given time frame.</h2>
            <div class="card">
            <p id="misvis">MISSION</p>
            <h2> To give passengers an easy access about the bus schedules for a convenient and hassle free travel in an innovative way. </h2>
            </div>
            <div class="card">
            <p id="misvis"> VISION </p>
            <h2> We envision to provide a hassle free travel to all passengers all over the world. </h2>
            </div>
      </div>
      </div>
      </div>
      <br>
      <br>
      <center><p id="us">Who we are</p></center>
      <br>
      <div class="row">
        <div class="col-sm-3">
            <div class="card">
            <b-img id="imgMember" :src="require('assets/nanit.jpg')" fluid alt="Fluid image"></b-img>
              <p id="pMember">Nanit Katipunan</p>
            </div>
          </div>
      <br>
        <div class="col-sm-3">
            <div class="card">
            <b-img id="imgMember" :src="require('assets/tanya.png')" fluid alt="Fluid image"></b-img>
              <p id="pMember">Cristina Bustamante</p>
            </div>
        </div>
      <br>
        <div class="col-sm-3">
            <div class="card">
            <b-img id="imgMember" :src="require('assets/mars.jpg')" fluid alt="Fluid image"></b-img>
              <p id="pMember">Ma.Lyn Gamboa</p>
            </div>
        </div>
      <br>
        <div class="col-sm-3">
            <div class="card">
              <b-img id="imgMember" :src="require('assets/yubert.png')" fluid alt="Fluid image"></b-img>
              <p id="pMember">Yubert Mariscal</p>
            </div>
          </div>
        </div>
    </b-modal>
    
  </b-card>
  
</template>

<script>
  export default {
  }
</script>

<style>

.container {
  border: 50% black;

}
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
  color: white;
}
#misvis {
  font-size: 300%;
  font-weight: bold;
  font-family:arial;
  color:green;
}
#us {
  font-size: 350%;
}
div {
  position: cover;
}
 #imgMember {
  width: 50%;
  height: 30%;
  margin-left: 0%;
}
#pMember {
  margin-top: 0%;
} 
</style>
