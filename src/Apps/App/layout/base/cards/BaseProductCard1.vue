<template>
  <div class="item-cards pointer">
    <div class="cards mw-200">
      <img :src="baseFileUrl + item.thumbnail" alt="img" />
      <div class="flex flex-jcsb">
        <div class="mt-10 fs-p9em">{{ item.title }} {{ item.obj_name }}</div>
        <div class="mt-10 tertiary">${{ item.pricing_price }}</div>
      </div>

      <img
        class="mt-5 w-65"
        src="@/Apps/App/assets/img/rating/rating-3.5.png"
      />
    </div>

    <div @click="addToCart(item)">
      <BaseBtn class="btz -fill-1 pointer fs-p9em b mt-5 ptb-10 prl-20 w-100p">
        ADD TO CART
      </BaseBtn>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-item-card-1",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addCartItem", {
        obj_uid: item.obj_uid,
      });
      this.$router.push({ name: "cart" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
