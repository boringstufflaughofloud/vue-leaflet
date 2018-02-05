<template>
  <main>
    <v-map :zoom="zoom" :center="center">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
      <v-marker :lat-lng="marker"></v-marker>
    </v-map>
  </main>
</template>

<script>
  import Vue2Leaflet from 'vue2-leaflet';
//  import LeafletMap from 'vue2-leaflet/src/components/Map.vue';
//  import LeafletTileLayer from 'vue2-leaflet/src/components/TileLayer.vue';

  export default {

    name: "Map",
    components: {
      "v-map": Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-marker': Vue2Leaflet.Marker
    },
    data() {
      return {
        zoom: 13,
        center: [50.3907521,30.4698982],
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(50.3907521,30.4698982),
      }
    }
  }
</script>

<style lang="scss">
  main {
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }
</style>
