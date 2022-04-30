<template>
  <button class="btz" :class="buttonClass" v-on="$attrs" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  name: "base-btn-1",
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.btz:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.btz:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.btz:focus {
  outline: 0;
}
.btz:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.btz.-disabled {
  color: #000000;
  background: rgb(235, 235, 235);
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  opacity: 0.1;
}

.btz.-fill-1 {
  background: #000000;
  color: #ffffff;
}
.btz.-fill-2 {
  color: #ffffff;
  background: transparent;
  border: 2px solid #bcd2ed;
}

.btz.-fill-3 {
  color: #000000;
  background: #ffffff;
}
.btz.-fill-4 {
  color: #000000;
  background: #c4ff00;
}
.btz.-fill-5 {
  color: #ffffff;
  background: transparent;
  border: 2px solid #ffffff;
}

.btz.-fill-6 {
  color: #000000;
  background: #bcd2ed;
}

.btz.-fill-red {
  color: #000000;
  background: #d2042d;
}
.btz.-fill-amber {
  color: #000000;
  background: #ffbf00;
}
</style>
