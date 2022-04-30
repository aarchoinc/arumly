<template>
  <div>
    <div class="user-badge flex flex-aic">
      <div class="w-35 h-35 pointer" @click="showUBMenu">
        <img
          class="pointer w-35"
          src="@/Apps/App/assets/default/default-avatar.svg"
        />
      </div>
    </div>
    <!--/.nav-->

    <UBMenu v-if="ubMenu" @showUBMenu="showUBMenu()" />
  </div>
</template>

<script>
import UBMenu from "./UBMenu";

export default {
  name: "UB-1",
  components: {
    UBMenu,
  },
  data() {
    return {
      ubMenu: false,
    };
  },

  methods: {
    showUBMenu() {
      this.ubMenu = !this.ubMenu;
      this.createMenu = false;
      this.appsMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
