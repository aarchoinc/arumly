<template>
  <section class="home-b4 p-40">
    <div class="fs-1p1em" style="text-align: center; color: #888888">
      FROM THE PEOPLE—CUSTOMER REVIEWS
    </div>

    <div class="flex flex-wrap flex-jcc mt-20">
      <div class="mw-400">
        <h3 class="mt-30 b">Rating</h3>

        <BaseQuote1
          class="mt-15"
          quote="I’ve lived in Seattle for 15 years. Arumly was the thing that was
          missing and has been my favorite part about the Seattle community ever
          since it arrived."
          author="- tiffanybluestone"
        />
      </div>

      <div class="mw-250 b3-right">
        <img src="@/Apps/App/assets/default/default-image.png" />
      </div>
    </div>
  </section>
</template>

<script>
import items from "@/data/home/homeBanners.js";

export default {
  name: "home-banner-4",
  data() {
    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-b4 {
  background: #f9f0f4;
}

.b3-right {
  margin-top: 20px;
  margin-left: -20px;
}

@media (min-width: 717px) {
  .b3-right {
    margin-top: 5px;
    margin-left: 30px;
  }
}
</style>
