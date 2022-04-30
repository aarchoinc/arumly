<template>
  <div class="prl-15">
    <div class="flex flex-jcsb prl-10">
      <div class="title">
        {{ title }}
      </div>
      <router-link class="route b quaternary" :to="{ name: route }">
        View All
      </router-link>
    </div>
    <div class="hl"></div>
  </div>
</template>

<script>
export default {
  name: "base-osb-header",

  props: {
    title: {
      type: String,
    },
    route: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.3em;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 5px;
}
.route:hover {
  text-decoration: underline;
}
</style>
