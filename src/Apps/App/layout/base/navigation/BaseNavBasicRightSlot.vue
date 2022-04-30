<template>
  <section class="navv">
    <div class="flex flex-jcsb mt-20 mrl-3p pb-20">
      <div class="route flex">
        <router-link class="route mr-20 pointer" :to="{ name: route1 }" exact>{{
          title1
        }}</router-link>
        <router-link class="route mr-20 pointer" :to="{ name: route2 }" exact>{{
          title2
        }}</router-link>
        <router-link class="route mr-20 pointer" :to="{ name: route3 }" exact>{{
          title3
        }}</router-link>
        <router-link class="route mr-20 pointer" :to="{ name: route4 }" exact>{{
          title4
        }}</router-link>
        <router-link class="route mr-20 pointer" :to="{ name: route5 }" exact>{{
          title5
        }}</router-link>
        <router-link class="route mr-20 pointer" :to="{ name: route6 }" exact>{{
          title6
        }}</router-link>
        <router-link class="route mr-20 pointer" :to="{ name: route7 }" exact>{{
          title7
        }}</router-link>
        <router-link class="route mr-20 pointer" :to="{ name: route8 }" exact>{{
          title8
        }}</router-link>
      </div>

      <slot></slot>
    </div>
    <!-- <div class="hl mt-15"></div> -->
  </section>
</template>

<script>
export default {
  name: "base-basic-nav-1",
  props: [
    // Route Name
    "title1",
    "title2",
    "title3",
    "title4",
    "title5",
    "title6",
    "title7",
    "title8",

    // Routes
    "route1",
    "route2",
    "route3",
    "route4",
    "route5",
    "route6",
    "route7",
    "route8",

    // Button
    "btnTitle1",

    // Button Route
    "btnRoute1",
  ],
};
</script>

<style lang="scss" scoped>
.navv {
  border-bottom: solid 1px #455671;
}
.route {
  font-size: 1em;
  color: #bcd2ed;
}

.route a:hover,
.route a.active-link {
  color: #2f9fff;
  // display: inline-block;
  border-bottom: 2px solid #2f9fff;
  // padding-bottom: 1px;
}
</style>
