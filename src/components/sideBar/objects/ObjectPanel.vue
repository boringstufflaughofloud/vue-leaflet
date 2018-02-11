<template lang="pug">
  div(class="object-details")

    p Select Coding Scheme
    b-dropdown(id="ddown1" text="Coding Scheme" class="m-md-2")
      b-dropdown-item(v-for="(item, key, index) in codingSchemeList" :key="index") {{item}}
    p Affiliation
    b-dropdown(id="ddown1" text="Affiliation" class="m-md-2")
      b-dropdown-item(v-for="(item, key, index) in affiliationList" :key="index") {{item}}

</template>

<script>

  export default {
    name: "ObjectPanel",

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
