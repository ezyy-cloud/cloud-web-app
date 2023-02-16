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
            <CoursesCard
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
import CoursesCard from "@/components/CoursesCard.vue";

export default defineComponent({
  name: "HorizontalScroll",
  components: {
    CoursesCard,
  },
  setup() {
    const categories = ref([
      {
        name: "Networking",
        scrollPosition: ref(0),
        id: "buzz",
        items: [
          {
            name: "Wifi",
            shortDescription: "Learn to deploy a Wifi Network",
            longDescription: "Deploy a managed Enterprise WiFi",
            logo: "https://www.itpedia.nl/wp-content/uploads/2018/07/wifi.png",
            rating: 4.5,
            time: 4,
          },
          {
            name: "CCTV",
            shortDescription: "Learn to deploy a CCTV Network",
            longDescription: "Deploy a managed large scale CCTV Network",
            logo: "https://icseeapp.com/wp-content/uploads/2021/06/wifi-ptz-camera-icsee.jpg",
            rating: 2.3,
            time: 2.5,
          },
        ],
      },
      {
        name: "Telematics",
        scrollPosition: ref(0),
        id: "missa",
        items: [
          {
            name: "Missa",
            shortDescription: "Learn to install a car tracker",
            longDescription: "Learn to install a tracker",
            logo: "https://lzd-img-global.slatic.net/g/p/d4b215d6edd8c33545c8bed78c346980.jpg_1200x1200q80.jpg_.webp",
            rating: 3.5,
            time: 2.5,
          },
        ],
      },
      {
        name: "Digital Marketing",
        scrollPosition: ref(0),
        id: "missa",
        items: [
          {
            name: "Facebook",
            shortDescription: "Platforms101: Facebook",
            longDescription: "Learn how to effectively manage a brand on facebook",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png",
            rating:4.0,
            time: 2,
          },
          {
            name: "Twitter",
            shortDescription: "Platforms101: Twitter",
            longDescription: "Learn how to effectively manage a brand on twitter",
            logo: "https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg",
            rating:3.0,
            time: 2,
          },
          {
            name: "Instagram",
            shortDescription: "Platforms101: Instagram",
            longDescription: "Learn how to effectively manage a brand on instagram",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
            rating:3.5,
            time: 2,
          },
          {
            name: "LinkedIn",
            shortDescription: "Platforms101: LinkedIn",
            longDescription: "Learn how to effectively manage a brand on linkedIn",
            logo: "https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png",
            rating:4.0,
            time: 2,
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
