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
import items from "@/data/products.js";
import { mapState } from "vuex";

export default {
  name: "shop-all-products",
  data() {
    return {
      items,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.ShopModule.allProducts,
    }),
  },

  methods: {
    fetch() {
      this.$store.dispatch("fetchProductsByLIMIT");
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
