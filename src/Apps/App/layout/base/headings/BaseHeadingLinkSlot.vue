<template>
  <div class="flex flex-jcsb flex-aic" :class="baseClass">
    <router-link
      class="heading-ls flex flex-aic"
      :to="{ name: headingLink }"
      :class="headingClass"
    >
      {{ heading }}

      <img
        :src="require('@/Apps/' + headingIcon)"
        :class="iconClass"
        v-if="headingIcon"
      />
    </router-link>

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
    headingLink: {
      type: String,
    },
    headingIcon: {
      type: String,
    },
    iconClass: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.heading-ls:hover {
  text-decoration: underline;
}
</style>
