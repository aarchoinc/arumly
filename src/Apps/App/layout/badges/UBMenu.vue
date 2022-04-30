<template>
  <div class="dropdown-menu ptb-10" @click="$emit('showUBMenu')">
    <router-link class="route pointer flex flex-aic" :to="{ name: 'home' }">
      <!-- <img src="@/Apps/App/assets/img/nav/tracker-white.svg" /> -->
      <div class="pl-15 fs-1em b">Home</div>
    </router-link>

    <router-link class="route pointer flex flex-aic" :to="{ name: 'about' }">
      <!-- <img src="@/Apps/App/assets/img/nav/tracker-white.svg" /> -->
      <div class="pl-15 fs-1em b">About</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UB-Menu",
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  position: absolute;
  top: 55px;
  right: 2px;
  font-size: 1em;
  font-weight: bold;
  background-color: #192844;
  width: 240px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.route {
  padding: 12px 0px 12px 40px;
  font-size: 1.1em;

  img {
    width: 20px;
  }
}
.route:hover {
  color: #ffffff;
  background-color: #bebebe;
}
</style>
