<template>
  <div class="bsn-1 flex flex-aic flex-jcsb prl-20">
    <div class="tbs-1 ptb-15 flex flex-aic" :class="navClass">
      <slot name="goBack"></slot>

      <div class="fs-1p3em b mr-30">{{ heading }}</div>

      <router-link
        class="tabb pointer"
        v-if="title1"
        :to="{ name: route1 }"
        exact
      >
        {{ title1 }}
      </router-link>

      <router-link
        class="tabb pointer"
        v-if="title2"
        :to="{ name: route2 }"
        exact
      >
        {{ title2 }}
      </router-link>

      <router-link
        class="tabb pointer"
        v-if="title3"
        :to="{ name: route3 }"
        exact
      >
        {{ title3 }}
      </router-link>

      <router-link
        class="tabb pointer"
        v-if="title4"
        :to="{ name: route4 }"
        exact
      >
        {{ title4 }}
      </router-link>

      <router-link
        class="tabb pointer"
        v-if="title5"
        :to="{ name: route5 }"
        exact
      >
        {{ title5 }}
      </router-link>

      <router-link
        class="tabb pointer"
        v-if="title6"
        :to="{ name: route6 }"
        exact
      >
        {{ title6 }}
      </router-link>

      <router-link
        class="tabb pointer"
        v-if="title7"
        :to="{ name: route7 }"
        exact
      >
        {{ title7 }}
      </router-link>

      <router-link
        class="tabb pointer"
        v-if="title8"
        :to="{ name: route8 }"
        exact
      >
        {{ title8 }}
      </router-link>
    </div>

    <slot name="right"></slot>
  </div>
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

    "heading",
    "navClass",
  ],
};
</script>

<style lang="scss" scoped>
.bsn-1 {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  background-color: #000000;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
}
.tbs-1 {
  a:hover,
  a.active-link {
    text-decoration: underline;
    font-weight: bold;
    color: #00ceff;
  }
}
.tabb {
  font-size: 0.9em;
  color: #ffffff;
  margin-right: 35px;
}
</style>
