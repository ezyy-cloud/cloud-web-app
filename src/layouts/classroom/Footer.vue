<template>
  <v-footer class="footer">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Ezyy&#174;</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.v-footer {
  height: 6vh;
  position: fixed;
  width: 100vw;
  bottom: 0;
  background: #fbfcfe;
}
</style>
