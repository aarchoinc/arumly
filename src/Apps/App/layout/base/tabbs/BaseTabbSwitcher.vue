<template>
  <section>
    <div class="flex flex-jcc mt-20 mrl-15">
      <div class="tabbs flex" :class="navClass">
        <div class="tabbs mr-10 pointer" @click="selectedComponent = 'Tabb1'">
          Reviews
        </div>

        <div class="tabbs mr-10 pointer" @click="selectedComponent = 'Tabb1'">
          Related
        </div>
      </div>
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
.tabbs {
  font-size: 1em;
  font-weight: bold;
  color: #ffffff;

  a:hover,
  a.active-link {
    color: #00ceff;
    // display: inline-block;
    border-bottom: 2px solid #00ceff;
    // padding-bottom: 15px;
    // padding-bottom: 1px;
  }
}
@media (min-width: 860px) {
  .tabbs {
    font-size: 1.1em;
  }
}
</style>
