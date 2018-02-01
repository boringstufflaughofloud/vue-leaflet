<template lang="pug">
  div(id="side-bar")
    h1 {{message}}
</template>

<script>
  export default {
    name: "SideBar",
    data(){
      return {
        message: "tesdwst"
      }
    }
  }
</script>

<style lang="scss">
  #side-bar {
    height: 100%;
    width: 250px;
    background-color: bisque;
  }
</style>
