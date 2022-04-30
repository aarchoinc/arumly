<template>
  <div class="item-cards pointer">
    <div class="cards mw-260">
      <img :src="item.thumbnail" alt="img" />
      <div class="mt-10 b">{{ item.title }}</div>
      <BaseBtn
        class="btz -fill-1 pointer fs-1p1em b-500 mt-10 ptb-10 prl-20 w-100p"
      >
        {{ item.btnMsg }}
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
};
</script>

<style lang="scss" scoped></style>
