<template lang="pug">
  header
    button(@click="toogleSideBar()")
      i(class="ion-navicon")

</template>

<script>
  export default {
    name: "NavigationBar",
    methods: {
      toogleSideBar(){
        this.$store.commit('toogleSidebar')
      }
    }
  }
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 56px;
    background-color: #fff;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.095);
    padding: 8px 16px;
    overflow: hidden;
    box-sizing: border-box;
  }

</style>
