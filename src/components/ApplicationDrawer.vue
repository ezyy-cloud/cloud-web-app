<template>
  <v-col>
    <v-row align="center" justify="space-around">
      <v-col v-for="(eco, i) in ecosystem" :key="i" align="center">
        <v-hover
          v-slot:default="{ hover }"
          open-delay="200"
        >
          <v-card
            :class="{ 'on-hover' : hover }"
            class="mx-auto pt-8"
            :elevation='hover ? 16 : 2'
            v-on:click="openApp(eco.link)"
          >
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
        </v-hover>
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
        source: require("../assets/gringo.png"),
        link: 'https://gringo.ezyy.cloud'
      },
      {
        text: "Buzz",
        source: require("../assets/buzz.png"),
        link: 'https://buzz.ezyy.cloud'
      },
      {
        text: "Missa",
        source: require("../assets/missa.png"),
        link: 'https://missa.ezyy.cloud'
      },
      {
        text: "Cloud Suite",
        source: require("../assets/eSuites.png"),
        link: 'https://esuite.ezyy.cloud'
      }
    ]
  }),
  methods: {
    openApp(app: any) {window.location.href = app}
  }
});
</script>
