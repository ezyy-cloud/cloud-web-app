<template>
  <div style="align-items: center; justify-content: center; display: flex">
    <v-sheet class="pa-4" width="80vw" height="100%" rounded="xl" elevation="0">
      <v-container v-for="(category, index) in categories" :key="index">
        <div>
          <h3 class="ml-4">{{ category.name }}</h3>
        </div>
        <div class="scroll-container">
          <v-btn
            @click="
              scroll(-1, { value: category.scrollPosition }, category.id, index)
            "
            icon="mdi-chevron-left"
            size="large"
            style="position: absolute; z-index: 90; left: 11vw"
          />
          <div
            :id="category.id"
            class="scrollable bg-grey-lighten-4 pl-8 pr-8 ml-4 mr-4"
          >
            <AppsCard
              v-for="(item, index) in category.items"
              :key="index"
              :item="item"
            />
          </div>
          <v-btn
            @click="
              scroll(1, { value: category.scrollPosition }, category.id, index)
            "
            icon="mdi-chevron-right"
            size="large"
            style="position: absolute; z-index: 90; right: 11vw"
          />
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppsCard from "@/components/AppsCard.vue";

export default defineComponent({
  name: "HorizontalScroll",
  components: {
    AppsCard,
  },
  setup() {
    const categories = ref([
      {
        name: "Business",
        scrollPosition: ref(0),
        id: "buzz",
        items: [
          {
            name: "Rhodja",
            shortDescription: "Rhodja",
            longDescription: "Accomodation Listings",
            logo: "https://pbs.twimg.com/profile_images/1562047113168650241/NNOx1xpe_400x400.jpg",
            rating: 4.8,
            price: 0,
          },
        ],
      },
      {
        name: "Utilities",
        scrollPosition: ref(0),
        id: "missa",
        items: [
          {
            name: "Missa",
            shortDescription: "Missa",
            longDescription: "Vehicle tracking app",
            logo: "https://www.ezyy.cloud/assets/missa.492987f9.png",
            rating: 2.1,
            price: 0,
          },
        ],
      },
    ]);


    function scroll(
      delta: number,
      scrollPosition: { value: number },
      rowId: any,
      categoryNumber: number
    ) {
      const scrollable = document.getElementById(rowId) as HTMLElement;
      console.log(scrollable+ ":Scroll")
      const scrollAmount = 600;
      const target = scrollPosition.value + delta * scrollAmount;
      scrollable.scrollTo({ left: target, behavior: "smooth" });
      if (target == -scrollAmount || target < 0) {
        scrollPosition.value = 0;
        return;
      } else if (target > scrollable.scrollWidth - scrollable.clientWidth) {
        scrollPosition.value = scrollable.scrollWidth - scrollable.clientWidth;
        return;
      }
      categories.value[categoryNumber].scrollPosition = target;
    }

    return {
      categories,
      scroll,
    };
  },
});
</script>

<style scoped>
.scroll-container {
  display: flex;
  align-items: center;
}

.scrollable {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  width: 100%;
}

.v-card {
  flex: 0 0 auto;
  margin: 0 10px;
}
</style>
