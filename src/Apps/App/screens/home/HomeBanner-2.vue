<template>
  <section class="p-20">
    <div class="fs-1p1em" style="text-align: center; color: #888888">
      WHAT WE’RE ABOUT
    </div>

    <div class="flex flex-wrap flex-jcsa flex-jcc auto">
      <div class="cards mw-260 mt-30">
        <img
          src="@/Apps/App/assets/img/products/paint-brush-arumly.jpg"
          alt="img"
        />
        <div class="mt-10 b">CREATE. BE DIFFERENT.</div>

        <div @click="navigateToParam('shop-all-products', { limit: 20 })">
          <BaseBtn
            class="btz -fill-1 pointer fs-1p1em b-500 mt-10 ptb-10 prl-20 w-100p"
          >
            SHOP NOW
          </BaseBtn>
        </div>
      </div>

      <div class="cards mw-260 mt-30">
        <img src="@/Apps/App/assets/img/arumly/notebook-arumly.jpg" alt="img" />
        <div class="mt-10 b">COMMUNITY BUILT.</div>

        <div @click="navigateTo('')">
          <BaseBtn
            class="btz -fill-1 pointer fs-1p1em b-500 mt-10 ptb-10 prl-20 w-100p"
          >
            SELL MY PRODUCTS
          </BaseBtn>
        </div>
      </div>

      <div class="cards mw-260 mt-30">
        <img src="@/Apps/App/assets/img/arumly/thread-arumly.jpg" alt="img" />
        <div class="mt-10 b">LEARN WITH US.</div>

        <!-- <div @click="navigateToParam('events')"> -->
        <div>
          <BaseBtn
            class="btz -fill-1 pointer fs-1p1em b-500 mt-10 ptb-10 prl-20 w-100p"
          >
            SEE EVENTS
          </BaseBtn>
        </div>
      </div>
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
