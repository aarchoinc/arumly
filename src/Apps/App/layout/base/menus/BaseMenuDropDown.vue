<template>
  <nav>
    <div class="routes flex" v-bind="$attrs" :class="navClass">
      <router-link
        :class="linkClass"
        class="route pointer"
        v-if="title1"
        :to="{ name: route1 }"
        exact
      >
        {{ title1 }}
      </router-link>

      <router-link
        :class="linkClass"
        class="route pointer"
        v-if="title2"
        :to="{ name: route2 }"
        exact
      >
        {{ title2 }}
      </router-link>

      <router-link
        :class="linkClass"
        class="route pointer"
        v-if="title3"
        :to="{ name: route3 }"
        exact
      >
        {{ title3 }}
      </router-link>

      <router-link
        :class="linkClass"
        class="route pointer"
        v-if="title4"
        :to="{ name: route4 }"
        exact
      >
        {{ title4 }}
      </router-link>

      <router-link
        :class="linkClass"
        class="route pointer"
        v-if="title5"
        :to="{ name: route5 }"
        exact
      >
        {{ title5 }}
      </router-link>

      <router-link
        :class="linkClass"
        class="route pointer"
        v-if="title6"
        :to="{ name: route6 }"
        exact
      >
        {{ title6 }}
      </router-link>

      <router-link
        :class="linkClass"
        class="route pointer"
        v-if="title7"
        :to="{ name: route7 }"
        exact
      >
        {{ title7 }}
      </router-link>

      <router-link
        :class="linkClass"
        class="route pointer"
        v-if="title8"
        :to="{ name: route8 }"
        exact
      >
        {{ title8 }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "base-basic-nav-1",
  inheritAttrs: false,
  props: [
    "navClass",
    "linkClass",

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
  ],
};
</script>

<style lang="scss" scoped>
nav {
  display: none;

  a:hover,
  .active {
    color: #2f9fff !important;
    text-decoration: underline;
  }
}
.routes {
  font-size: 1em;
  color: #bcd2ed;
}
.route {
  margin-right: 30px;
}

@media (min-width: 1015px) {
  nav {
    display: inline;
  }
  /* ~~~~~~ min-width: 480px ~~~~~~ */
}
</style>
