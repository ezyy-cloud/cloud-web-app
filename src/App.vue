<template>
  <v-app>
    <v-app-bar app color="transparent" flat id="nav">
      <v-spacer></v-spacer>

      <router-link to="/auth">
        <v-btn text>
          <span class="mr-2">SIGN UP | LOGIN</span>
          <v-icon>mdi-cloud-lock</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <router-view />

    <v-footer absolute padless fixed class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Ezyy&#174;</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
