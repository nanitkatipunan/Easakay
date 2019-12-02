<template>
  <div>
      <p style="text-align: center; font: 400% bold times;"> Route Details </p>
    <b-table class="border border-success" striped hover :items="items" ></b-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: [
      ]
    };
  }
  ,created(){
    axios({url: 'http://localhost:8082/items', method: 'GET' })
				.then(resp => {
            // console.log(resp.data.buses);
            this.items = resp.data.items;
				})
				.catch(err => {
					console.log(err)
				})
  }
};
</script>