<template>
  <div>
    <button
      v-on="$attrs"
      v-bind="$attrs"
      class="button btz"
      :class="buttonClass"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "base-button-1",
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  text-align: center;
  // font-size: 1em;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button:focus {
  outline: 0;
}
.button:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button + .button {
  margin-left: 1em;
}
.button.-fill-gradient-1 {
  background: linear-gradient(to right, #374a65, #496b9b);
  color: #ffffff;
}
.button.-fill-gradient-2 {
  background: linear-gradient(to right, #bcd2ed, #d5e6fc);
  color: #374a65;
}
.button.-fill-gradient-3 {
  background: linear-gradient(to right, #2f9fff, #3695e5);
  color: #ffffff;
}
.button.-fill-gradient-4 {
  background: #ffffff;
  color: #2b323b;
}
.button.-fill-gradient-5 {
  color: #ffffff;
  background: transparent;
  border: 2px solid #bcd2ed;
}
.button.-size-xs {
  height: 25px;
  // padding: 10px 10px;
}
.button.-size-xs-2 {
  height: 25px;
  // padding: 5px 5px;
}
.button.-size-s {
  height: 30px;
  // padding: 10px 10px;
}
.button.-size-s-1 {
  height: 30px;
  // padding: 10px 0px;
}
.button.-size-s-2 {
  height: 30px;
  // padding: 10px 15px;
}
.button.-size-m {
  height: 35px;
  // padding: 10px 15px;
}
.button.-size-l {
  height: 45px;
}
.button.-size-xl {
  height: 50px;
}
.button.-w-100p {
  width: 100%;
}
.button.-w-full {
  width: 100%;
}
.button.-uppercase {
  text-transform: uppercase;
}
.button.-lowercase {
  text-transform: lowercase;
}
.button.-capitalize {
  text-transform: capitalize;
}
.button.-icon-right {
  text-align: left;
  padding: 0 20px;
}
.button.-icon-right > .icon {
  margin-left: 10px;
}
.button.-icon-left {
  text-align: right;
  padding: 0 20px;
}
.button.-icon-left > .icon {
  margin-right: 10px;
}
.button.-icon-center {
  padding: 0 20px;
}
.button.-no-padding {
  padding: 0px;
}
.button.-padding {
  padding: 0px 0px;
}
</style>
