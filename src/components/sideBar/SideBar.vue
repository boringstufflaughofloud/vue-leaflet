<template lang="pug">
  transition(name="slide")
    aside(v-show="componentVisibility")
</template>

<script>
  import store from "../../store/UIStore"

  export default {
    name: "SideBar",

    computed: {
      componentVisibility () {
        return store.state.sidebarVisibility
      }
    },
  }
</script>

<style lang="scss">
  aside {
    background-color: #fff;
    width: 400px;
    /*position: fixed;*/
    /*top: 55px;*/
    left: 0;
    bottom: 0px;
    /*z-index: 1;*/
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  button {
    background: transparent;
    border: 0;
    width: 40px;
    height: 40px;
    font-size: 30px;
    outline: none;
    color: #9f9f9f;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s ease-in-out;
  }

  button:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .slide-transition {
    transition: all .3s cubic-bezier(.65, .05, .36, 1);
  }

  .slide {
    &-enter {
      left: -100%;
    }
    &-leave {
      left: -100%;
    }
  }

</style>
