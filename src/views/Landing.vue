<template>
  <div class="landing">
    <Home/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "Landing",
  components: {
    Home
  }
};
</script>
