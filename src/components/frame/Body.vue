<template>
  <div id="body">
    <div v-if="auth.user !== null">
      <sideBar></sideBar>
        <transition>
          <router-view></router-view>
        </transition>
    </div>
    <div v-else>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<style scoped>

</style>

<script>
import sideBar from "components/frame/Sidebar.vue";
import AUTH from 'services/auth'
export default {
  name: "body",
  components: {
    sideBar
  },
  data(){
      return{ 
          auth: AUTH,
      }
  }
};
</script>