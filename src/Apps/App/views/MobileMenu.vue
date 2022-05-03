<template>
  <div class="bg-overlay">
    <MobileHeader @showHamburger="showHamburger" />

    <nav id="mobile-nav">
      <Main-MM v-if="mobileMenuStep === 'mm-main'" @step2="step = 2" />
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

// Mobile Main
import MainMM from "@/Apps/App/layout/mobile/Main-MM.vue";
import MobileHeader from "@/Apps/App/layout/mobile/MobileHeader.vue";

export default {
  name: "sideBar",
  components: {
    "Main-MM": MainMM,
    MobileHeader,
  },
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    ...mapState({
      mobileMenuStep: (state) => state.LayoutStorageModule.mobileMenuStep,
    }),
  },
  methods: {
    ...mapActions(["showHamburger"]),
  },
};
</script>

<style lang="scss" scoped>
.bg-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

nav {
  position: fixed;
  top: 55px;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  overflow-y: hidden;
  z-index: 5;
  border-top: 2px solid #000000;
  border-right: 2px solid #000000;
}
</style>
