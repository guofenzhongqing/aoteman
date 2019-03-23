<template>
  <div id="app">
   <!--<MyCity></MyCity>-->
    <router-view></router-view>
  </div>
</template>

<script>
import {} from './resize'
import MyCity from "./components/MyCity";
export default {
  name: 'App',
  components: {MyCity},
  methods: {

  }
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
* {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
  html, body {
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
