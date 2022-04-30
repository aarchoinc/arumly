<template>
  <div class="board-1" v-bind="$attrs" :class="boardClass">
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
.board-1 {
  background: #232733;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
</style>
