<template>
  <img class="icon" :src="require('@/Apps/Account' + imageUrl + '')" />
</template>

<script>
export default {
  name: "base-icon",
  props: {
    imageUrl: String,
    image: String,
    // width: {
    //   type: [Number, String],
    //   default: 24,
    // },
    // height: {
    //   type: [Number, String],
    //   default: 24,
    // },
  },
};
</script>

<style lang="scss" scoped></style>
