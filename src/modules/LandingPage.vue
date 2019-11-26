<template>
  <div id="card">
    <b-card-body>
      <div class="circular" v-bind:style="{ 'background-image': 'url(  )' }">
        <!-- <b-img :src="require('@/assets/NewProject.png')"></b-img> -->
        <p id="p" class="text-center">"Value everyone's comfort <br/> in the world <br/>of travel"</p>
        <center><button id="show-btn" @click="$bvModal.show('bv-modal-example')">Learn more</button></center>
        <b-modal id="bv-modal-example" hide-footer>
          <template v-slot:modal-title>
           <router-link to="/">Easakay</router-link>
          </template>
          <div class="d-block text-center">
            <h3>Easakay is a web application that caters the need </h3>
          </div>
          <b-button class="bg-success" block @click="$bvModal.hide('bv-modal-example')" >Close Me</b-button>
        </b-modal>
      </div>
    </b-card-body>
  </div>
</template>
<style> 
#p {
  font-size: 50px;
  margin-top: 10%;
  font-style: arial;
  
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
  /* background:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvn1vhmcUVSTg3nxpYw6rfKXaApuXrjSnv4t62ozKeet_xUaceoQ&s);*/
  background-repeat: no-repeat;
  position: cover;
}
</style>