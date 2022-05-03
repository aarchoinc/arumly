<template>
  <div class="sidenav ptb-10">
    <div
      class="route pointer"
      @click="
        navigateTo('home');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('home') }"
    >
      HOME
    </div>

    <div>
      <div
        class="route flex flex-jcsb flex-aic pointer"
        @click="toggleShopStatus()"
        v-bind:class="{ active: isRouteName('shop') }"
        @mouseover="hover_1 = true"
        @mouseleave="hover_1 = false"
      >
        <div>SHOP</div>

        <!-- <img
          class="icon w-12"
          src="@/Apps/Gen/assets/img/icons/drop-down-white.svg"
        /> -->
      </div>

      <PushDown class="ml-60" v-show="shopStatus" />
    </div>

    <!-- <div
      class="route pointer"
      @click="
        navigateTo('events');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('events') }"
    >
      EVENTS
    </div> -->

    <div
      class="route pointer"
      @click="
        navigateTo('about');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('about') }"
    >
      ABOUT
    </div>

    <div
      class="route pointer"
      @click="
        navigateTo('contact');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('contact') }"
    >
      CONTACT
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PushDown from "@/Apps/App/layout/mobile/ShopPushDown.vue";

export default {
  name: "main-mm",
  components: {
    PushDown,
  },
  data() {
    return {
      hover_1: false,
      shopPushDown: false,
    };
  },
  computed: {
    ...mapState({
      shopStatus: (state) => state.LayoutStorageModule.shopStatus,
    }),
  },
  methods: {
    ...mapActions(["showHamburger", "toggleShopStatus"]),
  },
};
</script>

<style lang="scss" scoped>
.sidenav {
  .route {
    padding: 16px 35px 16px 35px;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    color: #000000;
    display: flex;
  }

  .route:hover,
  .active:hover,
  .active {
    background-color: #f9f0f4;
  }
}
</style>
