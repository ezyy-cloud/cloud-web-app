<template>
  <v-card
    class="ma-4 pa-2"
    height="220"
    width="200"
    v-on:click="() => {}"
    flat
  >
    <v-img
      height="100"
      :src="props.item.logo"
      contain
    />
<v-col class="">
    <v-card-text>{{ props.item.shortDescription }}</v-card-text>

    <v-spacer></v-spacer>
    <v-card-text>
    <v-row class="pr-3 pl-3">
      <span style="align-items: center; justify-content: start; display: flex">
        {{ props.item.rating }}&nbsp;
        <v-icon icon="mdi-thumb-up" size="sm"></v-icon>
      </span>
      <v-spacer></v-spacer>
      <span class="font-weight-bold">{{ props.item.time+'HRS' }}</span>
      </v-row>
      </v-card-text>
    </v-col>
  </v-card>

</template>

<script lang="ts" setup>
const props = defineProps([ 'item' ])

</script>

<style scoped></style>
