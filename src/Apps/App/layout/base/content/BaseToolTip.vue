<template>
  <div :class="toolTipClass" class="showtip">{{ tip }}</div>
</template>

<script>
export default {
  name: "NSDOu-1-1",
  props: {
    toolTipClass: {
      type: String,
    },
    tip: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
/* Tooltip text */
.showtip {
  visibility: hidden;
  font-size: 0.9em;
  text-align: center;
  padding: 5px 8px;
  border-radius: 6px;
  white-space: nowrap;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  margin-left: -50px;
  width: fit-content;
  height: fit-content;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .showtip {
  visibility: visible;
}

.showtip.pz-1 {
  bottom: 100%;
  left: 50%;
}
.showtip.pz-2 {
  bottom: -30px;
  left: 70%;
  padding: 7px 10px !important;
}
.showtip.-fill-1 {
  background: rgb(77, 77, 77);
  color: #fff;
  font-weight: bold;
}
.showtip.-fill-2 {
  background: #d8d8d8;
  color: #000000;
  font-weight: 500;
}

// .tooltip .showtip::after {
//   content: " ";
//   position: absolute;
//   top: 100%; /* At the bottom of the tooltip */
//   left: 50%;
//   margin-left: -5px;
//   border-width: 5px;
//   border-style: solid;
//   border-color: rgba(255, 255, 255, 0.1) transparent transparent transparent;
// }
</style>
