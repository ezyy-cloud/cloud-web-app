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
            <ServiceCard
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
import ServiceCard from "@/components/ServiceCard.vue";

export default defineComponent({
  name: "HorizontalScroll",
  components: {
    ServiceCard,
  },
  setup() {
    const categories = ref([
      {
        name: "Buzz",
        scrollPosition: ref(0),
        id: "buzz",
        items: [
          {
            name: "BuzzFi",
            shortDescription: "Managed WiFi Service",
            longDescription: "Full managed Enterprise WiFi",
            logo: "https://buzzfi.ezyy.cloud/assets/logo.cb35ffec.svg",
            rating: 4.5,
            price: 25,
          },
          {
            name: "BuzzTV",
            shortDescription: "Digital Signage Display",
            longDescription: "Full managed Enterprise WiFi",
            logo: "https://buzztv.ezyy.cloud/assets/logo.9270d3a0.svg",
            rating: 4.5,
            price: 25,
          },
          {
            name: "BuzzAds",
            shortDescription: "Digital Public Ads",
            longDescription: "Full managed Enterprise WiFi",
            logo: "https://www.ezyy.cloud/img/buzz.4256cba1.png",
            rating: 4.5,
            price: 5,
          },
          {
            name: "BuzzEye",
            shortDescription: "Managed CCTV Service",
            longDescription: "Full managed Enterprise WiFi",
            logo: "https://www.ezyy.cloud/img/buzz.4256cba1.png",
            rating: 4.5,
            price: 20,
          },
          {
            name: "BuzzTok",
            shortDescription: "Managed PBX Service",
            longDescription: "Full managed Enterprise WiFi",
            logo: "https://www.ezyy.cloud/img/buzz.4256cba1.png",
            rating: 4.5,
            price: 100,
          },
        ],
      },
      {
        name: "Missa",
        scrollPosition: ref(0),
        id: "missa",
        items: [
          {
            name: "Missa",
            shortDescription: "Car Tracking Service",
            longDescription: "Vehicle tracking service",
            logo: "https://www.ezyy.cloud/img/missa.d80043c4.png",
            rating: 3.5,
            price: 0,
          },
        ],
      },
      {
        name: "Cloud Suite",
        scrollPosition: ref(0),
        id: "csuite",
        items: [
          {
            name: "Digital Marketing",
            shortDescription: "Digital Marketing Services",
            longDescription: "Fully managed social media account",
            logo: "https://www.ezyy.cloud/img/cSuites.fea2693f.png",
            rating: 4.5,
            price: 75,
          },
          {
            name: "Web Development",
            shortDescription: "Web Development",
            longDescription: "Tailor made website",
            logo: "https://www.ezyy.cloud/img/cSuites.fea2693f.png",
            rating: 3.5,
            price: 100,
          },
          {
            name: "Enterprise Email",
            shortDescription: "Email Hosting",
            longDescription: "Hosted Corporate Emails",
            logo: "https://www.ezyy.cloud/img/cSuites.fea2693f.png",
            rating: 3.8,
            price: 10,
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
