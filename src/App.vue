<template>
  <div id="app" :class="['app',darkState?'default-night':'default-day']">
    <splash></splash>
    <router-view/>
    <footer-tab v-if="index"></footer-tab>
  </div>
</template>

<script>
import Splash from './components/splash.vue'
import FooterTab from './components/indexFooter.vue'
import store from './vuex/store'
export default {
  name: 'app',
  store,
  data(){
    return {
      msg:'welcome'
    }
  },
  components:{
    FooterTab,
    Splash
  },
  computed:{
    index(){
      return this.$store.state.index;
    },
    darkState(){
      return this.$store.state.darkState;
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
.app {
  font-family: '.PingFangSC-Semibold';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
}
.default-night{
  background-color: #181A1D;
}
</style>
