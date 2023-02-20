<template>
  <v-footer class="footer">
    <v-col class="text-center" cols="12">
      <strong>Ezyy Inc&#174; </strong> — A division of the King Shayne Group (Pvt) Ltd — {{ new Date().getFullYear() }}
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
