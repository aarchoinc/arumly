<template>
  <div class="sidebar-top flex flex-aic prl-2p">
    <div class="w-16 mr-70 pointer fs-1p7em" @click="$emit('showHamburger')">
      X
    </div>
    <div
      class="fs-1p8em b pointer"
      @click="
        navigateTo('home');
        showHamburger();
      "
    >
      Arumly
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
  background-color: #ffffff;
  overflow-y: hidden;
  z-index: 5;
  border-right: 2px solid #000000;
}
</style>
