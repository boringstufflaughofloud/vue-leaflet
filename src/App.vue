<template lang="pug">
  div(id="app")
    NavigationBar
    div(class="content")
      SideBar
      Map
    Footer
</template>

<script>
  import NavigationBar from './components/navigationBar/NavigationBar.vue'
  import SideBar from './components/sideBar/SideBar.vue'
  import Map from './components/map/Map.vue'
  import Footer from './components/footer/Footer.vue'


  export default {
    name: 'App',
    components: {
      NavigationBar,
      SideBar,
      Map,
      Footer
    }
  }
</script>

<style>
  @import "styles/app.scss";

  .content{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  footer{
    height: 25px;
    background-color: aqua;
  }
</style>
