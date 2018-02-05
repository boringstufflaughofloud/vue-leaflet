<template lang="pug">
  header
    button(@click="toogleSideBar()")
      i(class="ion-navicon")

</template>

<script>
  import store from "../../store/UIStore"
  export default {
    name: "NavigationBar",



    methods: {
      toogleSideBar(){
        store.commit('toogleSidebar')
      }
    },

  }
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 56px;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*z-index: 80;*/
    background-color: #fff;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.095);
    padding: 8px 16px;
    overflow: hidden;
    box-sizing: border-box;
  }

</style>
