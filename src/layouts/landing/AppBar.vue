<template>
  <v-app-bar app color="transparent" flat id="nav">
    <v-app-bar-nav-icon
      @click="toggleDrawerState"
      class="d-sm-none"
   />
    <v-spacer></v-spacer>
    <router-link to="/store/services" class="d-none d-sm-flex">
      <v-btn text append-icon="mdi-shopping-music">
        <span class="mr-2">Store</span>
      </v-btn>
    </router-link>
    <router-link to="/classroom/courses" class="d-none d-sm-flex">
      <v-btn text append-icon="mdi-school">
        <span class="mr-2">Classroom</span>
      </v-btn>
    </router-link>
    <router-link to="/authentication/login">
      <v-btn text append-icon="mdi-cloud-lock">
        <span class="mr-2">Login</span>
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
          title: 'Store',
          value: 1,
          props: {
            appendIcon: 'mdi-shopping-music',
          },
          to: '/store/services'
        },
        {
          title: 'Classroom',
          value: 2,
          props: {
            appendIcon: 'mdi-school',
          },
          to: '/classroom/courses'
        },
      ]
const drawerState = ref(false);
function toggleDrawerState() {
  drawerState.value = !drawerState.value;
}
</script>

<style lang="scss" scoped>
#nav {
  padding-right: 8vw;
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    &.router-link-exact-active {
  background: #ffffff;
      color: #01b7ff;
    }
  }
}
</style>
