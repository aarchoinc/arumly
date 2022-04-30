<template>
  <main class="base-view pb-90">
    <HomeBannerx1 />
    <div class="mw-1000 auto">
      <HomeBannerx2 />

      <div class="hl-1"></div>
    </div>
  </main>
</template>

<script>
import HomeBannerx1 from "@/Apps/Gen/screens/home/HomeBanner-1.vue";
import HomeBannerx2 from "@/Apps/Gen/screens/home/HomeBanner-2.vue";

export default {
  name: "home-page",
  components: {
    HomeBannerx1,
    HomeBannerx2,
  },
};
</script>

<style lang="scss" scoped></style>
