<template>
  <v-app-bar app color="#01B7FF" flat id="nav">
    <v-app-bar-nav-icon
      @click="toggleDrawerState"
      class="d-sm-none"
   />
    <v-spacer></v-spacer>
    <router-link to="/" class="d-none d-sm-flex">
      <v-btn append-icon="mdi-home">
        <span class="mr-2">Home</span>
      </v-btn>
    </router-link>
    <router-link to="/store/services" class="d-none d-sm-flex">
      <v-btn append-icon="mdi-cloud-braces">
        <span class="mr-2">Cloud Services</span>
      </v-btn>
    </router-link>
    <router-link to="/store/gadgets" class="d-none d-sm-flex">
      <v-btn text append-icon="mdi-devices">
        <span class="mr-2">Gadgets</span>
      </v-btn>
    </router-link>
    <router-link to="/store/apps" class="d-none d-sm-flex">
      <v-btn text append-icon="mdi-play-circle">
        <span class="mr-2">Apps</span>
      </v-btn>
    </router-link>
  </v-app-bar>

  <v-navigation-drawer v-model="drawerState" temporary>
    <v-list :items="items">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        variant="plain"
        :to="item.to"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.props.appendIcon"></v-icon>
        </template>

        <v-list-item-title >{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const items = [
        {
          title: 'Home',
          value: 0,
          props: {
            appendIcon: 'mdi-home',
          },
          to: '/'
        },
        {
          title: 'Cloud Services',
          value: 1,
          props: {
            appendIcon: 'mdi-cloud-braces',
          },
          to: '/store/services'
        },
        {
          title: 'Gadgets',
          value: 2,
          props: {
            appendIcon: 'mdi-devices',
          },
          to: '/store/gadgets'
        },
        {
          title: 'Apps',
          value: 2,
          props: {
            appendIcon: 'mdi-play-circle',
          },
          to: '/store/apps'
        },
      ]
const drawerState = ref(false);
function toggleDrawerState() {
  drawerState.value = !drawerState.value;
}
</script>

<style lang="scss" scoped>
#nav {
  padding-right: 10vw;
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    border-radius: 20px;
    &.router-link-exact-active {
  background: #ffffff;
      color: #01b7ff;
    }
  }
}
</style>
