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
      ]
const drawerState = ref(false);
function toggleDrawerState() {
  drawerState.value = !drawerState.value;
}
</script>

<style lang="scss" scoped>
#nav {
  padding-right: 34vw;
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
