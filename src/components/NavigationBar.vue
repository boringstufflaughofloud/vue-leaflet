<template lang="pug">
  div(id="navigation-bar")
    h1 {{message}}
</template>

<script>
  export default {
    name: "NavigationBar",
    data(){
      return {
        message: "tesdwst"
      }
    }
  }
</script>

<style lang="scss">
  #navigation-bar {
    width: 100%;
    height: 50px;
    background-color: #32ff45;
  }
</style>
