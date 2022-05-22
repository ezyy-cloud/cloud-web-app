<template>
  <v-app>
    <v-app-bar app color="transparent" flat id="nav">
      <v-spacer></v-spacer>
      <router-link to="/auth" v-if="!authPage">
        <v-btn text color="white">
          <span class="mr-2">LOGIN</span>
          <v-icon>mdi-cloud-lock</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col>
          <main>
          <v-main>
            <router-view />
          </v-main>
          </main>
          </v-col>
        </v-row>
      </v-container>
    
    <router-link :to="activeFab.link">
     <v-fab-transition>
        <v-btn
        :key="activeFab.icon"
        :color="activeFab.color"
        elevation="16"
        fab
        x-large
        style="position: fixed; bottom: 14vh; right: 2vh; z-index: 4;"
        >
          <v-icon style="color: white;">{{ activeFab.icon }}</v-icon>
        </v-btn>
      </v-fab-transition>
      </router-link>

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

  created() {
    this.setActiveFab()
  },

  components: {},

  methods: {
    setActiveFab() {
      if (this.$router.currentRoute.path === '/') {
        this.activeFab = { color: '#06B6FF', icon: 'mdi-cart', link: '/shop'}
        return
      } else { 
        this.activeFab = { color: 'red', icon: 'mdi-close', link: '/' }
        return
      }
    }
  },
  watch:{
    $route (to, from){
      this.setActiveFab()
      if (this.$router.currentRoute.path === '/auth') {
        this.authPage = true
        return
      } else {
        this.authPage = false
      }
    }
  },


  data: () => ({
    activeFab: {color: '', icon: '', link: ''},
    authPage: false,
  }),
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: url("https://cdn.hipwallpaper.com/i/92/7/TOhDCG.jpg") no-repeat center center;
  background-size: cover;
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
