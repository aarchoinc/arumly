<template>
  <div>
    <img
      class="icon"
      :src="require('@/Apps/' + imageUrl + image + '')"
      :width="width"
    />
  </div>
</template>

<script>
export default {
  name: "base-icon",
  props: {
    imageUrl: String,
    image: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    // height: {
    //   type: [Number, String],
    //   default: 24,
    // },
  },
};
</script>

<style lang="scss" scoped></style>
