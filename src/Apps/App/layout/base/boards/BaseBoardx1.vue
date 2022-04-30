<template>
  <div class="board" v-bind="$attrs" :class="boardClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "base-board-1",
  inheritAttrs: false,
  props: {
    boardClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  background-color: #ffffff;
  max-width: 800px;
  border-radius: 6px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}
</style>
