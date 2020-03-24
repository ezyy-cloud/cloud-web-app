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

      <ApplicationDrawer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ApplicationDrawer from "@/components/ApplicationDrawer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    ApplicationDrawer
  }
});
</script>
