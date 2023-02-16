<template>
  <div style="padding-right: 8vw; padding-left: 8vw;">
    <v-row class="mt-12">
      <v-col cols="12">
        <v-img
          transition="fade-transition"
          :src="EzyyLogo"
          contain
          height="15vh"
        />
      </v-col>
    </v-row>

    <v-row class="mt-12" id="tagLine">
      <v-col cols="12">
        <h1 class="text-h3 font-weight-black">The cloud. Made ezyy.</h1>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <ApplicationDrawer />
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import ApplicationDrawer from "@/components/ApplicationDrawer.vue";
import EzyyLogo from "@/assets/logos/ezyyWhite.png";
</script>

<style lang="scss" >
#tagLine {
  text-align: center;
}
</style>
