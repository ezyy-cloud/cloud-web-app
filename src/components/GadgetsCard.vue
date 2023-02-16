<template>
  <v-card
    class="ma-4"
    width="200"
    height="200"
    rounded="xl"
    v-on:click="() => {}"
    flat
  >
    <v-img
      class="align-end text-white ma-4"
      height="100"
      :src="props.item.logo"
      contain
    />

    <v-card-subtitle>{{ props.item.shortDescription }}</v-card-subtitle>

    <v-card-text>
    <v-row class="pr-3 pl-3">
      <span style="align-items: center; justify-content: start; display: flex">
        {{ props.item.rating }}
        <v-icon icon="mdi-star" size="sm"></v-icon>
      </span>
      <v-spacer></v-spacer>
      <span>{{ props.item.price == 0 ? "Free" :  formatter.format(props.item.price) }}</span>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps([ 'item' ])
const formatter = new Intl.NumberFormat('en-US', {
style: 'currency',
currency: 'USD',

// These options are needed to round to whole numbers if that's what you want.
//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

</script>

<style scoped></style>
