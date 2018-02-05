<template lang="pug">
  div(id="app")
    NavigationBar
    div(class="content")
      SideBar
      Map
</template>

<script>
  import NavigationBar from './components/navigationBar/NavigationBar.vue'
  import SideBar from './components/sideBar/SideBar.vue'
  import Map from './components/map/Map.vue'

  export default {
    name: 'App',
    components: {
      NavigationBar,
      SideBar,
      Map
    }
  }
</script>

<style>
  @import "styles/app.scss";
  @import "../node_modules/leaflet/dist/leaflet.css";

  .content{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
</style>
