<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img
          transition="fade-transition"
          :src="require('../assets/ezyyWhite.png')"
          contain
          height="15vh"
        />
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12">
        <h1 class="display-2 font-weight-black">The cloud. Made ezyy.</h1>
      </v-col>
    </v-row>

    <v-row cols="12" class="mt-12">
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
