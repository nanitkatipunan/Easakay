<template>
  <div id="app" >
    <Header/>
    <router-view/>
  </div>
</template>


<style scoped lang="scss">
@import "assets/style.scss";
.background{
  background-image: $background !important;
  background-repeat: $norepeat !important;
  background-size: $cover !important ;
  height: $bheight !important;
}
</style>

<script>
import Header from 'components/frame/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
