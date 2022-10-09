<template>
  <header id="header-main" class="grid prl-20">
    <div class="left-hm flex flex-aic">
      <div class="pointer mr-30" @click="showHamburger">
        <div class="bar"></div>
        <div class="bar mt-5"></div>
        <div class="bar mt-5"></div>
      </div>

      <HeaderNavigation class="header-nav fs-p8em" />
    </div>
    <!-- title3="EVENTS"
        route3="events" -->
    <div class="middle-hm">
      <router-link
        class="pointer mt-4"
        :to="{ name: 'home' }"
        custom
        v-slot="{ navigate }"
      >
        <h1 @click="navigate">Arumly</h1>
      </router-link>
    </div>

    <div class="right-hm" v-if="isAuthenticated">
      <div class="flex flex-aic">
        <div
          class="cart tertiary flex flex-aic mr-18 pointer"
          @click="navigateTo('cart')"
        >
          <div class="w-22 mr-6">
            <img src="@/Apps/App/assets/img/icons/arumly-cart.png" />
          </div>

          <div>( {{ items.length }} )</div>
        </div>

        <!-- <div class="liked tertiary flex flex-aic mr-25">
          <img
            class="w-22 mr-10"
            src="@/Apps/App/assets/img/icons/arumly-liked.png"
          />
          <span>( 3 )</span>
        </div> -->

        <div class="account pointer b" @click="ubMenu = !ubMenu">
          <i class="fa-solid fa-user fa-lg"></i>
        </div>
      </div>

      <UBMenu v-if="ubMenu" @showUBMenu="ubMenu = !ubMenu" />
    </div>

    <div class="right-hm" v-else>
      <AuthBadge />
    </div>

    <MobileMenu v-if="hamburgerStatus" />
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

import MobileMenu from "@/Apps/App/views/MobileMenu.vue";
import UBMenu from "@/Apps/App/layout/badges/UBMenu.vue";
import AuthBadge from "@/Apps/App/layout/badges/AuthBadge.vue";
import HeaderNavigation from "@/Apps/App/layout/header/HeaderNavigation.vue";

export default {
  name: "main-header",
  components: {
    MobileMenu,
    UBMenu,
    HeaderNavigation,
    AuthBadge,
  },
  data() {
    return {
      ubMenu: false,
    };
  },

  computed: {
    ...mapState({
      hamburgerStatus: (state) => state.AppModule.hamburgerStatus,
      items: (state) => state.CheckoutModule.cartItems,
    }),
  },
  methods: {
    ...mapActions(["showHamburger"]),
    fetch() {
      this.$store.dispatch("fetchCartItems");
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped>
#header-main {
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  color: #000000;
  background-color: #ffffff;
  z-index: 1000;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  grid-template-areas: "lf lf lf lf md md md md rt rt rt rt";
  align-content: center;
}
.left-hm {
  grid-area: lf;
}
.middle-hm {
  grid-area: md;
  justify-self: center;
  align-self: center;
}
.right-hm {
  grid-area: rt;
  justify-self: end;
  align-self: center;
}
.header-nav,
.cart,
.liked,
.hi {
  display: none !important;
}

.bar {
  width: 20px;
  height: 2px;
  background-color: #000000;
  transition: 0.4s;
}

@media (min-width: 900px) {
  #header-main {
    grid-template-areas: "lf lf lf lf md md md md rt rt rt rt";
  }
  .header-nav,
  .cart,
  .liked,
  .hi {
    display: inline-flex !important;
  }
}
</style>
