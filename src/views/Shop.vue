<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card
          class="mx-auto"
          max-width="344"
          elevation="12"
          style="text-align: initial;"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                Tech Shop
              </div>
              <v-list-item-title class="text-h5 mb-1">
                Welcome
              </v-list-item-title>
              <v-list-item-subtitle
                >View the Tech Shop catalag on Whatsapp
                today!</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img :src="require('../assets/wa_business.webp')"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn rounded outlined href="https://wa.me/c/263774481007">
              Open
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  props: {
    source: String
  },
  methods: {}
};
</script>
