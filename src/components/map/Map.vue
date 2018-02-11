<template lang="pug">
  main
   div(id="map")
</template>

<script>
import MapMixin from './mixins/MapMixin'
import MarkersMixin from './mixins/MarkersMixin'
  export default {

    name: "Map",
    mixins: [MapMixin, MarkersMixin],
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
  main {
    width: 100%;
    height: 100%;
    overflow: hidden;

    #map{
      width: 100%;
      height: 100%;
      overflow: hidden;
    };
  }
</style>
