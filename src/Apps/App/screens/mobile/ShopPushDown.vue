<template>
  <div>
    <div
      class="route pointer"
      @click="
        navigateTo('shop-all-products');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('shop-all-products') }"
    >
      ALL
    </div>

    <div
      class="route pointer"
      @click="
        navigateTo('shop-notebooks');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('shop-notebooks') }"
    >
      NOTEBOOKS
    </div>

    <div
      class="route pointer"
      @click="
        navigateTo('shop-paper');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('shop-paper') }"
    >
      PAPER
    </div>

    <div
      class="route pointer"
      @click="
        navigateTo('shop-writing-tools');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('shop-writing-tools') }"
    >
      WRITING TOOLS
    </div>

    <div
      class="route pointer"
      @click="
        navigateTo('shop-paint');
        showHamburger();
      "
      v-bind:class="{ active: isRouteName('shop-paint') }"
    >
      PAINT
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "library-push-nav",
  data() {
    return {
      hover_1: false,
      hover_2: false,
      hover_3: false,
    };
  },

  methods: {
    ...mapActions(["showHamburger"]),
  },
};
</script>

<style lang="scss" scoped>
.route {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  color: #000000;
  align-items: center;
  text-align: center;

  .icon {
    margin-right: 15px;
    width: 20px;
  }
}

.route:hover,
.active {
  color: #000000;
  text-decoration: underline;
  font-weight: bold;
}
</style>
