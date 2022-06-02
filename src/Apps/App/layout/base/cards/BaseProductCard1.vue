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
