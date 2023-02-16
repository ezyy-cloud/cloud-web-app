<template>
  <div>
    <authentication-bar />
    <authentication-view />
    <authentication-footer />
  </div>
</template>

<script lang="ts" setup>
// @ is an alias to /src
import AuthenticationBar from "./AppBar.vue";
import AuthenticationView from "./View.vue";
import AuthenticationFooter from "./Footer.vue";

</script>
