<template>
  <section class="base-crumbs mt-56 ptb-12 prl-18 fs-p9em">
    <div class="route flex ml-15" :class="navClass">
      <router-link class="route mr-10 pointer" :to="{ name: route1 }" exact>{{
        title1
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title2">/</div>

      <router-link class="route mr-10 pointer" :to="{ name: route2 }">{{
        title2
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title3">/</div>

      <router-link class="route mr-10 pointer" :to="{ name: route3 }" exact>{{
        title3
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title4">/</div>

      <router-link class="route mr-10 pointer" :to="{ name: route4 }" exact>{{
        title4
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title5">/</div>

      <router-link class="route mr-10 pointer" :to="{ name: route5 }" exact>{{
        title5
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title6">/</div>

      <router-link class="route mr-10 pointer" :to="{ name: route6 }" exact>{{
        title6
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title7">/</div>

      <router-link class="route mr-10 pointer" :to="{ name: route7 }" exact>{{
        title7
      }}</router-link>
    </div>
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

    // Routes
    "route1",
    "route2",
    "route3",
    "route4",
    "route5",
    "route6",
    "route7",

    "navClass",
  ],
};
</script>

<style lang="scss" scoped>
.route {
  color: #888888;
}

// .route a:hover,
// .route a.active {
//   color: #000000;
//   font-weight: 500;
// }
.base-crumbs {
  background: #f9f0f4;
}
</style>
