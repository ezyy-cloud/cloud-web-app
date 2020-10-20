<template>
  <v-col>
    <v-row align="center" justify="space-around">
      <v-col v-for="(eco, i) in ecosystem" :key="i" align="center">
        <v-card class="pt-8">
            <v-img
              transition="fade-transition"
              :src="eco.source"
              height="15vh"
              width="25vh"
              contain
            ></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text>
            {{eco.text}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApplicationDrawer",

  data: () => ({
    ecosystem: [
      {
        text: "Gringo",
        source: require("../assets/gringo.png")
      },
      {
        text: "Buzz",
        source: require("../assets/buzz.png")
      },
      {
        text: "Missa",
        source: require("../assets/missa.png")
      },
      {
        text: "eSuites",
        source: require("../assets/eSuites.png")
      }
    ]
  })
});
</script>
