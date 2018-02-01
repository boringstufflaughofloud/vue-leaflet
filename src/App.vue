<template>
  <div id="app">
    <!--<NavigationBar/>-->
    <SideBar/>
    <Map/>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue'
  import SideBar from './components/SideBar.vue'
  import Map from './components/Map.vue'

  export default {
    name: 'App',
    components: {
//      NavigationBar,
      SideBar,
      Map
    }
  }
</script>

<style>
 @import "styles/app.scss";
</style>
