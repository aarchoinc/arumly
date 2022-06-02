<template>
  <nav class="bsn-1">
    <div class="tbs-1 ml-15 flex flex-aic" :class="navClass">
      <div class="fs-1p3em b mr-30">{{ heading }} {{ subHeading }}</div>

      <template>
        <router-link
          class="tabb pointer"
          v-if="title1 && !queryLimit"
          :to="{ name: route1 }"
          v-bind:class="{ activeLink: this.$route.name === route1 }"
        >
          {{ title1 }}
        </router-link>

        <router-link
          class="tabb pointer"
          v-if="title1 && queryLimit"
          :to="{ name: route1, query: { limit: queryLimit } }"
          v-bind:class="{ activeLink: this.$route.name === route1 }"
        >
          {{ title1 }}
        </router-link>
      </template>

      <template>
        <router-link
          class="tabb pointer"
          v-if="title2 && !queryRoute2"
          :to="{ name: route2 }"
          v-bind:class="{ activeLink: this.$route.name === route2 }"
        >
          {{ title2 }}
        </router-link>

        <router-link
          class="tabb pointer"
          v-if="title2 && queryRoute2"
          :to="{
            name: route2,
            query: { item_status: queryRoute2, limit: queryLimit },
          }"
          v-bind:class="{ activeLink: this.$route.name === route2 }"
        >
          {{ title2 }}
        </router-link>
      </template>

      <template>
        <router-link
          class="tabb pointer"
          v-if="title3 && !queryRoute3"
          :to="{ name: route3 }"
          v-bind:class="{ activeLink: this.$route.name === route3 }"
        >
          {{ title3 }}
        </router-link>

        <router-link
          class="tabb pointer"
          v-if="title3 && queryRoute3"
          :to="{
            name: route3,
            query: { item_status: queryRoute3, limit: queryLimit },
          }"
          v-bind:class="{ activeLink: this.$route.name === route3 }"
        >
          {{ title3 }}
        </router-link>
      </template>

      <template>
        <router-link
          class="tabb pointer"
          v-if="title4 && !queryRoute4"
          :to="{ name: route4 }"
          v-bind:class="{ activeLink: this.$route.name === route4 }"
        >
          {{ title4 }}
        </router-link>

        <router-link
          class="tabb pointer"
          v-if="title4 && queryRoute4"
          :to="{
            name: route4,
            query: { item_status: queryRoute4, limit: queryLimit },
          }"
          v-bind:class="{ activeLink: this.$route.name === route4 }"
        >
          {{ title4 }}
        </router-link>
      </template>

      <template>
        <router-link
          class="tabb pointer"
          v-if="title5 && !queryRoute5"
          :to="{ name: route5 }"
          v-bind:class="{ activeLink: this.$route.name === route5 }"
        >
          {{ title5 }}
        </router-link>

        <router-link
          class="tabb pointer"
          v-if="title5 && queryRoute5"
          :to="{
            name: route5,
            query: { item_status: queryRoute5, limit: queryLimit },
          }"
          v-bind:class="{ activeLink: this.$route.name === route5 }"
        >
          {{ title5 }}
        </router-link>
      </template>

      <template>
        <router-link
          class="tabb pointer"
          v-if="title6 && !queryRoute6"
          :to="{ name: route6 }"
          v-bind:class="{ activeLink: this.$route.name === route6 }"
        >
          {{ title6 }}
        </router-link>

        <router-link
          class="tabb pointer"
          v-if="title6 && queryRoute6"
          :to="{
            name: route6,
            query: { item_status: queryRoute6, limit: queryLimit },
          }"
          v-bind:class="{ activeLink: this.$route.name === route6 }"
        >
          {{ title6 }}
        </router-link>
      </template>

      <template>
        <router-link
          class="tabb pointer"
          v-if="title7 && !queryRoute7"
          :to="{ name: route7 }"
          v-bind:class="{ activeLink: this.$route.name === route7 }"
        >
          {{ title7 }}
        </router-link>

        <router-link
          class="tabb pointer"
          v-if="title7 && queryRoute7"
          :to="{
            name: route7,
            query: { item_status: queryRoute7, limit: queryLimit },
          }"
          v-bind:class="{ activeLink: this.$route.name === route7 }"
        >
          {{ title7 }}
        </router-link>
      </template>

      <template>
        <router-link
          class="tabb pointer"
          v-if="title8 && !queryRoute8"
          :to="{ name: route8 }"
          v-bind:class="{ activeLink: this.$route.name === route8 }"
        >
          {{ title8 }}
        </router-link>

        <router-link
          class="tabb pointer"
          v-if="title8 && queryRoute8"
          :to="{
            name: route8,
            query: { item_status: queryRoute8, limit: queryLimit },
          }"
          v-bind:class="{ activeLink: this.$route.name === route8 }"
        >
          {{ title8 }}
        </router-link>
      </template>
    </div>
  </nav>
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

    // Routes
    "queryRoute1",
    "queryRoute2",
    "queryRoute3",
    "queryRoute4",
    "queryRoute5",
    "queryRoute6",
    "queryRoute7",
    "queryRoute8",

    "queryLimit",

    "heading",
    "subHeading",
    "navClass",
  ],
};
</script>

<style lang="scss" scoped>
.bsn-1 {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  // background-color: #232733;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
}
.tbs-1 {
  padding: 15px 10px;

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

.activeLink {
  text-decoration: underline;
  font-weight: bold;
  color: #00ceff;
}
</style>
