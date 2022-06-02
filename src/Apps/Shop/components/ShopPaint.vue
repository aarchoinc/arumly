<template>
  <div>
    <div class="flex flex-wrap flex-jcsb flex-jcc">
      <BaseProductCard1
        class="auto mt-30"
        v-for="(item, $index) in products"
        :item="item"
        :key="$index"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "shop-paint",

  computed: {
    ...mapState({
      products: (state) => state.ShopModule.productsByTags,
    }),
  },

  methods: {
    fetch() {
      this.$store.dispatch("fetchProductsByTags", {
        obj_tags: "paint",
      });
    },
  },

  watch: {
    $route() {
      this.fetch();
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped></style>
