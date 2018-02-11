<template lang="pug">
  div(class="object-details")

    p Select Coding Scheme
    b-dropdown(id="ddown1" text="Coding Scheme" class="m-md-2")
      b-dropdown-item(v-for="(item, key, index) in codingSchemeList" v-on:click="onCodingSchemeSelect(item)" :key="index") {{item}}

    p Affiliation
    b-dropdown(id="ddown1" text="Affiliation" class="m-md-2")
      b-dropdown-item(v-for="(item, key, index) in affiliationList" v-on:click="onAffilationSelect(item)" :key="index") {{item}}

    p Battle Dimension
    b-dropdown(id="ddown1" text="Battle Dimension" class="m-md-2")
      b-dropdown-item(v-for="(item, key, index) in battleDimensionList" v-on:click="onBattleDimentionSelect(item)" :key="index") {{item}}


</template>

<script>

  export default {
    name: "ObjectPanel",

    methods:{
      onAffilationSelect(value){
          alert(value)
      },
      onCodingSchemeSelect(value){
          alert(value)
      },
      onBattleDimentionSelect(value){
          alert(value)
      }
    },

    data: () => {
      return {
        codingSchemeList: [
          "Warfighting",
          "Intelligence",
          "Stability Operations",
          "Emergency Management Symbols"
        ],
        affiliationList: [
            "Pending",
            "Unknown",
            "Assumed Friend",
            "Friend",
            "Neutral",
            "Suspect",
            "Hostile",
            "Exercise Pending",
            "Exercise Unknown",
            "Exercise Friend",
            "Exercise Neutral",
            "Exercise Assumed Friend",
            "Joker",
            "Faker",
            "None Specifieder",
        ],
        battleDimensionList: [
            "Space",
            "Air",
            "Ground",
            "Sea Surface",
            "Sea Surface",
            "Sea Subsurface",
            "SOF",
        ]
      }
    }

  }
</script>

<style lang="scss">

  .object-details {
    display: flex;
    align-self: flex-start;
    padding-top: 20px;
    justify-content: center;
    flex-direction: column;

    p{
      margin: 0;
      text-align: center;
    }
    #ddown1 {
      width: auto;
    }

    #ddown1__BV_toggle_ {
      width: 100%;
    }

  }

</style>
