<template>
  <section class="promo-bann h-30">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "banner-promo",
};
</script>

<style lang="scss" scoped>
.promo-bann {
  height: 45px;
  color: #ffffff;
  background-color: #2f9fff;
  z-index: 3;
  text-align: center;
}
.btn-join {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.5), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.5),
    0 6px 10px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.5),
    0 6px 10px 0 rgba(0, 0, 0, 0.19);
}
.join {
  font-size: 1em;
  font-weight: bold;
  margin-right: 10px;
}
.btn {
  padding: 5px 12px !important;
  font-size: 0.8em !important;
}
@media (min-width: 600px) {
  .join {
    font-size: 1.2em;
    font-weight: bold;
    margin-right: 10px;
  }
  .btn {
    padding: 5px 20px !important;
    font-size: 0.9em !important;
  }
  /* ~~~~~~ min-width: 600px ~~~~~~ */
}
</style>
