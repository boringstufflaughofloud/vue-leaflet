<template lang="pug">
  div(id="map")
    h1 {{message}}
</template>

<script>
  export default {
    name: "Map",
    data(){
      return {
        message: "tesdwst"
      }
    }
  }
</script>

<style lang="scss">
  #map {
    width: 250px;
    height: 100%;
    background-color: #ff98f1;
  }
</style>
