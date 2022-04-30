<template>
  <div class="page-header grid grid-header pt-15 pb-35 prl-5p h-0">
    <router-link class="left pointer" :to="{ name: route }">
      <!-- <img class="w-8" src="@/Apps/App/assets/img/general/arrow-left.svg" />  -->
    </router-link>
    <div class="center">
      <div class="fs-1p3em b nonary" :class="headerClass" v-if="header">
        {{ header }}
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "base-headline",
  props: {
    headerClass: {
      type: String,
    },
    route: {
      type: String,
    },
    header: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-header {
  grid-template-areas: "lf lf ct ct ct ct ct ct ct ct rt rt";
}
.left {
  grid-area: lf;
  align-self: center;
}
.center {
  grid-area: ct;
  justify-self: center;
  align-self: center;
}
.right {
  grid-area: rt;
  align-self: center;
}

.page-header {
  border: none;
  border-bottom: solid 1px rgba(188, 210, 237, 0.2);

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  text-transform: uppercase;
}

/* ==============================
    #ZZZ	  MEDIA QUERIES
================================ */

@media (min-width: 768px) {
  .page-header {
    // border: solid 1px rgba(188, 210, 237, 0.2);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}
</style>
