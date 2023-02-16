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
            <GadgetsCard
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
import GadgetsCard from "@/components/GadgetsCard.vue";

export default defineComponent({
  name: "HorizontalScroll",
  components: {
    GadgetsCard,
  },
  setup() {
    const categories = ref([
      {
        name: "Buzz",
        scrollPosition: ref(0),
        id: "buzz",
        items: [
          {
            name: "Ubiquiti Router",
            shortDescription: "Unifi Mesh Router",
            longDescription: "Hi-Fidelity Wifi router",
            logo: "https://cdn.shopify.com/s/files/1/1439/1668/products/U6-LR_01_7b618393-659d-4865-934e-d0db46109565_grande.png?v=1605269425",
            rating: 4.5,
            price: 200.00,
          },
          {
            name: "Icsee IP Cam",
            shortDescription: "IP Camera",
            longDescription: "Hi-Fidelity Wifi Camera",
            logo: "https://icseeapp.com/wp-content/uploads/2021/06/wifi-ptz-camera-icsee.jpg",
            rating: 4.5,
            price: 80.00,
          },
        ],
      },
      {
        name: "Missa",
        scrollPosition: ref(0),
        id: "missa",
        items: [
          {
            name: "SinoTrack Tracker",
            shortDescription: "ST901 Tracker",
            longDescription: "Economic vehicle tracker",
            logo: "https://sc04.alicdn.com/kf/Hf0ac52fe7e074dc5963be665e42c09c0S.jpg",
            rating: 2.5,
            price: 60.00,
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
