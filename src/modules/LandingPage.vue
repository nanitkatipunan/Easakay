<template>
  <div id="card">
    <b-card-body>
      <div class="circular" v-bind:style="{ 'background-image': 'url(  )' }">
        <p id="p" class="text-center">"Value everyone's comfort in the world of travel"</p>
        <button id="show-btn" @click="$bvModal.show('bv-modal-example')">Learn more</button>
        <b-modal id="bv-modal-example" hide-footer>
          <template v-slot:modal-title>
           Easakay
          </template>
          <div class="d-block text-center">
            <h3>Hello From This Modal!</h3>
          </div>
          <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
        </b-modal>
      </div>
    </b-card-body>
  </div>
</template>
<style> 
#p {
  font-size: 80px;
  margin-top: 10%;
  font-style: Impact, Charcoal, sans-serif;
  font-weight: bold;
}
#show-btn {
  background-color: green;
  margin-left: 45%;
  color: white;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
}
div {
  /* background:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvn1vhmcUVSTg3nxpYw6rfKXaApuXrjSnv4t62ozKeet_xUaceoQ&s);*/
  background-repeat: no-repeat;
  position: cover;
}
</style>