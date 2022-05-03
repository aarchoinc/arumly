<template>
  <section class="p-20">
    <div class="fs-1p1em" style="text-align: center; color: #888888">
      WHAT WE’RE ABOUT
    </div>
    <div class="flex flex-wrap flex-jcsb flex-jcc">
      <BaseItemCard1
        class="auto mt-30"
        v-for="(item, $index) in items.itemCards"
        :item="item"
        :key="$index"
      />
    </div>
  </section>
</template>

<script>
import items from "@/data/homeBanners.js";

export default {
  name: "home-banner-2",
  data() {
    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped></style>
