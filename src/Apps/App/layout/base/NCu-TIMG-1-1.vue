<template>
  <section>
    <div class="flex flex-jcsb mt-20 mb-30 mw-780 auto">
      <div>
        <router-link :to="routerUrl1">
          <div class="ti fs-1p2em b ml-3 mb-10">{{ routeName1 }}</div>

          <div
            class="card mw-240 mh-210 auto p-20 bdrd-6 quaternary-bg pointer"
          >
            <img
              :src="require('@/Apps/App/assets/img/' + imageUrl1 + '')"
              rel="preload"
            />
          </div>
          <!--/.card-->
        </router-link>
      </div>
      <!--/.route-1-->

      <div>
        <router-link :to="routerUrl2">
          <div class="ti fs-1p2em b ml-3 mb-10">{{ routeName2 }}</div>

          <div
            class="card mw-240 mh-210 auto p-20 bdrd-6 quaternary-bg pointer"
          >
            <img
              :src="require('@/Apps/App/assets/img/' + imageUrl2 + '')"
              rel="preload"
            />
          </div>
          <!--/.card-->
        </router-link>
      </div>
      <!--/.route-2-->

      <div>
        <router-link :to="routerUrl3">
          <div class="ti fs-1p2em b ml-3 mb-10">{{ routeName3 }}</div>

          <div
            class="card mw-240 mh-210 auto p-20 bdrd-6 quaternary-bg pointer"
          >
            <img
              :src="require('@/Apps/App/assets/img/' + imageUrl3 + '')"
              rel="preload"
            />
          </div>
          <!--/.card-->
        </router-link>
      </div>
      <!--/.route-3-->
    </div>
    <!--Card-Set-->
  </section>
</template>

<script>
export default {
  name: "navigation-card",
  props: [
    // Routes
    "routeName1",
    "routeName2",
    "routeName3",

    // Images
    "imageUrl1",
    "imageUrl2",
    "imageUrl3",

    // Routes
    "routerUrl1",
    "routerUrl2",
    "routerUrl3",
  ],
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2);
}

.link .cs-10 a:hover {
  background-color: #bcd2ed;
}

.icons img {
  // max-width: 30px;
}
</style>
