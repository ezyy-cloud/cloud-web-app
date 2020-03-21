<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          transition="fade-transition"
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-black mb-3">The cloud. Made ezyy.</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center" align="center">
          <v-container>
            <v-item-group>
              <v-container class="pa-0">
                <v-row align="center" justify="center">
                  <v-col
                    v-for="(eco, i) in ecosystem"
                    :key="i"
                    cols="12"
                    md="3"
                    align="center"
                    justify="center"
                  >
                    <v-item v-slot:default="{ active, toggle }">
                      <v-img
                        transition="fade-transition"
                        :src="eco.source"
                        width="150"
                        @click="toggle"
                      ></v-img>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "missa",
        source: require("../assets/missa.svg")
      },
      {
        text: "buzz",
        source: require("../assets/buzz.svg")
      },
      {
        text: "gringo",
        source: require("../assets/gringo.png")
      },
      {
        text: "esuites",
        source: require("../assets/esuites.svg")
      }
    ]
  })
});
</script>
