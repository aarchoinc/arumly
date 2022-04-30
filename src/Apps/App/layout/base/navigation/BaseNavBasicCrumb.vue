<template>
  <section>
    <div class="route flex mt-20 ml-15" :class="navClass">
      <router-link class="route mr-10 pointer" :to="{ name: route1 }" exact>{{
        title1
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title2">
        <!-- <img
          src="@/Apps/App/assets/img/general/icons/right-carrot-light-blue.svg"
        /> -->
      </div>
      <router-link class="route mr-10 pointer" :to="{ name: route2 }" exact>{{
        title2
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title3">
        <!-- <img
          src="@/Apps/App/assets/img/general/icons/right-carrot-light-blue.svg"
        /> -->
      </div>

      <router-link class="route mr-10 pointer" :to="{ name: route3 }" exact>{{
        title3
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title4">
        <!-- <img
          src="@/Apps/App/assets/img/general/icons/right-carrot-light-blue.svg"
        /> -->
      </div>

      <router-link class="route mr-10 pointer" :to="{ name: route4 }" exact>{{
        title4
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title5">
        <!-- <img
          src="@/Apps/App/assets/img/general/icons/right-carrot-light-blue.svg"
        /> -->
      </div>

      <router-link class="route mr-10 pointer" :to="{ name: route5 }" exact>{{
        title5
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title6">
        <!-- <img
          src="@/Apps/App/assets/img/general/icons/right-carrot-light-blue.svg"
        /> -->
      </div>

      <router-link class="route mr-10 pointer" :to="{ name: route6 }" exact>{{
        title6
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title7">
        <!-- <img
          src="@/Apps/App/assets/img/general/icons/right-carrot-light-blue.svg"
        /> -->
      </div>

      <router-link class="route mr-10 pointer" :to="{ name: route7 }" exact>{{
        title7
      }}</router-link>
      <div class="mr-10 mw-5 mt-1" v-if="title8">
        <!-- <img
          src="@/Apps/App/assets/img/general/icons/right-carrot-light-blue.svg"
        /> -->
      </div>

      <router-link class="route mr-10 pointer" :to="{ name: route8 }" exact>{{
        title8
      }}</router-link>
    </div>
    <div class="hl mt-15"></div>
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

    "navClass",
  ],
};
</script>

<style lang="scss" scoped>
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
