<template>
  <header class="header-main flex flex-jcsb flex-aic prl-20">
    <div class="left-h flex flex-aic">
      <div class="flex flex-aic mr-30">
        <div class="pointer mr-15" @click="showHamburger">
          <div class="bar"></div>
          <div class="bar mt-5"></div>
          <div class="bar mt-5"></div>
        </div>

        <router-link
          class="pointer"
          :to="{ name: 'home' }"
          custom
          v-slot="{ navigate }"
          ><h2 @click="navigate">LOGO</h2></router-link
        >
      </div>

      <BaseNavBasic
        class="header-nav"
        title1="Home"
        route1="home"
        title2="About"
        route2="about"
      />
    </div>

    <UserBadgex1 />

    <MobileMenu v-if="hamburgerStatus" />
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

import UserBadgex1 from "@/Apps/App/layout/badges/UB-1.vue";
import MobileMenu from "@/Apps/Menus/MobileMenu.vue";

export default {
  name: "main-header",
  components: {
    UserBadgex1,
    MobileMenu,
  },

  computed: {
    ...mapState({
      hamburgerStatus: (state) => state.AppModule.hamburgerStatus,
    }),
  },
  methods: {
    ...mapActions(["showHamburger"]),
  },
};
</script>

<style lang="scss" scoped>
.header-main {
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  color: #ffffff;
  background-color: #192844;
  z-index: 1000;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

.bar {
  width: 20px;
  height: 2px;
  background-color: #ffffff;
  transition: 0.4s;
}
</style>
