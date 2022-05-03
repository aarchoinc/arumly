<template>
  <main class="base-view pb-90">
    <HomeBannerx1 />
    <div class="auto">
      <HomeBannerx2 class="mw-1000 auto" />

      <div class="hl-1 mt-30 mw-1000 auto"></div>

      <HomeBannerx3 class="mt-5 mw-1000 auto" />

      <HomeBannerx4 class="mt-5" />

      <HomeBannerx5 class="mt-50 mw-1000 auto" />
    </div>
  </main>
</template>

<script>
import HomeBannerx1 from "@/Apps/App/screens/home/HomeBanner-1.vue";
import HomeBannerx2 from "@/Apps/App/screens/home/HomeBanner-2.vue";
import HomeBannerx3 from "@/Apps/App/screens/home/HomeBanner-3.vue";
import HomeBannerx4 from "@/Apps/App/screens/home/HomeBanner-4.vue";
import HomeBannerx5 from "@/Apps/App/screens/home/HomeBanner-5.vue";

export default {
  name: "home-page",
  components: {
    HomeBannerx1,
    HomeBannerx2,
    HomeBannerx3,
    HomeBannerx4,
    HomeBannerx5,
  },
};
</script>

<style lang="scss" scoped></style>
