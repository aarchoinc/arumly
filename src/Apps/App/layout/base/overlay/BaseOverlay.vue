<template>
  <div>
    <div
      v-on="$attrs"
      v-bind="$attrs"
      id="overlay"
      class="overlay"
      :class="overlayClass"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "base-overlay",
  inheritAttrs: false,
  props: {
    overlayClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000 !important;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
}
.overlay.-transparent {
  background-color: transparent;
}
</style>
