<template>
  <div id="app" >
  <Header></Header>
  <AppBody></AppBody>
  <!-- <Sidebar v-show = "$route.path === '/Dashboard' || $route.path === '/Subjects'|| $route.path === '/PersonalInfo' ? true: false"> -->
  <!-- </Sidebar> -->
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
// import Sidebar from 'router/frame/Sidebar.vue'
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'

export default {
  name: 'app',
  components: {
    Header,
    AppBody
    // Sidebar
  }
}
</script>
