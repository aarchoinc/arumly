<template>
  <div class="flex flex-jcsb flex-aic" :class="baseClass">
    <div class="flex flex-aic">
      <div :class="headingClass">
        {{ heading }}
      </div>

      <img :src="headingIcon" v-if="headingIcon" />
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "base-heading-link-slot",
  props: {
    baseClass: {
      type: String,
    },
    headingClass: {
      type: String,
    },
    heading: {
      type: String,
    },
    headingIcon: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
