<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>

    <div class="items overflow-1" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  line-height: 36px;
}

.custom-select .selected {
  padding: 5px 15px;
  width: 100%;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: #2b323b;
  background: #ffffff;
}

.custom-select .selected.open {
  border-bottom: 1px solid #000000;
}

.selected:after {
  position: absolute;
  content: "";
  top: 17px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.items {
  color: #2b323b;
  border-right: 1px solid #414953;
  border-left: 1px solid #414953;
  border-bottom: 1px solid #414953;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
  max-height: 400px;
  border-radius: 3px;
}

.custom-select .items div {
  color: #2b323b;
  padding-left: 15px;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: rgb(232, 240, 254) !important;
}

.selectHide {
  display: none;
}
</style>
