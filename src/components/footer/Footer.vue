<template lang="pug">
  footer
    div(class="coordinates")
      span {{getLatLngLabel}}
</template>

<script>
  export default {
    name: "Footer",

    computed: {
      getLatLngLabel () {
        return this.$store.getters.getFormatedCoordinatesForFooter;
      }
    },

    data: () => {
        return{
        }
    }

  }
</script>

<style lang="scss">
  footer {
    height: 25px;
    background-color: #fff;
    padding-right: 20px;
    .coordinates{
      font-family: Luminari, fantasy;
      font-size: 18px;
      text-align: end;
    }
  }

</style>
