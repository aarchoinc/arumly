<template>
  <div class="sidebar-top flex flex-aic prl-2p">
    <img
      src="@/Apps/App/assets/img/general/close-x-white.svg"
      class="w-16 mr-70 pointer"
      @click="$emit('showHamburger')"
    />

    <div
      class="fs-1p8em b pointer"
      @click="
        navigateTo('home');
        showHamburger();
      "
    >
      LOGO
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "mobile-header",
  methods: {
    ...mapActions(["showHamburger", "toggleSideStatus"]),
  },
};
</script>

<style lang="scss" scoped>
.sidebar-top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 55px;
  background-color: #192844;
  overflow-y: hidden;
  z-index: 5;
}
</style>
