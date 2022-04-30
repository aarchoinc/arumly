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
      Home
    </div>
    <div
      class="route pointer"
      @click="
        navigateTo('about');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('about') }"
    >
      About
    </div>

    <div>
      <div
        class="route flex flex-jcsb flex-aic pointer"
        @click="toggleSideStatus()"
        v-bind:class="{ active: mySideStatus }"
        @mouseover="hover_1 = true"
        @mouseleave="hover_1 = false"
      >
        <div>Drop Down</div>

        <img
          class="icon w-12"
          src="@/Apps/Gen/assets/img/icons/drop-down-white.svg"
        />
        <!-- <img
            v-if="hover_1 || mySideStatus"
            class="icon w-12"
            src="@/Apps/Gen/assets/img/icons/drop-down-white.svg"
          /> -->
      </div>

      <PushDown class="ml-60" v-show="mySideStatus" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PushDown from "@/Apps/Menus/mobile/push-downs/PushDown.vue";

export default {
  name: "main-mm",
  components: {
    PushDown,
  },
  data() {
    return {
      hover_1: false,
      hover_2: false,
      hover_3: false,
      hover_4: false,
      routing: this.$router,
    };
  },
  computed: {
    ...mapState({
      mySideStatus: (state) => state.LayoutStorageModule.sideStatus,
    }),
  },
  methods: {
    ...mapActions(["showHamburger", "toggleSideStatus"]),
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
    color: #ffffff;
    display: flex;
  }

  .route:hover,
  .active:hover,
  .active {
    background-color: #bebebe;
  }
}
</style>
