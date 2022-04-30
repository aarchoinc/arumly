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
  background: #10131a;
  // max-width: 800px;
  border-radius: 6px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.board2 {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.board-nr {
  border-radius: 0px;
}

.board.-bg-blue {
  background-color: #2b323b;
}
.board.-bg-black {
  background-color: #10131a;
}
.board.-bg-midnight {
  background-color: #1a1b1d;
}
.board.-bg-dirty-gray {
  background-color: #4f5b6a;
}
.board.-bg-white {
  background-color: #ffffff;
  color: #2b323b;
}
</style>
