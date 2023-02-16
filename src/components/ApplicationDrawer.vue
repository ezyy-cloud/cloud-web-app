<template>
  <v-col>
    <v-row align="center" justify="space-around">
      <v-col v-for="(eco, i) in ecosystem" :key="i" align="center">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            :elevation="isHovering ? 12 : 2"
            :class="{ 'on-hover': isHovering }"
            class="mx-auto pt-8"
            v-on:click="openApp(eco.link)"
            v-bind="props"
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
                {{ eco.text }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts" setup>
import gringo from "@/assets/logos/gringo.png";
import buzz from "@/assets/logos/buzz.png";
import missa from "@/assets/logos/missa.png";
import csuite from "@/assets/logos/csuite.png";

 const ecosystem = [
      {
        text: "Gringo",
        source: gringo,
        link: "https://gringo.ezyy.cloud"
      },
      {
        text: "Buzz",
        source: buzz,
        link: "https://buzz.ezyy.cloud"
      },
      {
        text: "Missa",
        source: missa,
        link: "https://missa.ezyy.cloud"
      },
      {
        text: "Cloud Suite",
        source: csuite,
        link: "https://csuite.ezyy.cloud"
      }
    ]

    function openApp(app: string) {
      window.location.href = app;
    }
</script>
<style scoped>
.v-card {
  transition: opacity 0.2s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
