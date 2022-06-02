<template>
  <section class="base-crumbs mt-56 ptb-12 prl-18 fs-p9em">
    <div
      class="route flex flex-aic ml-15 pointer"
      @click="navigateToParam('shop-all-products', { limit: 20 })"
    >
      <div>
        <img
          class="mr-10 w-5"
          src="@/Apps/Checkout/assets/img/left-arrow.svg"
        />
      </div>

      <div class="route mr-10">RETURN TO SHOPPING</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cart-breadcrumb",
};
</script>

<style lang="scss" scoped>
.route {
  color: #888888;
}

.base-crumbs {
  background: #f9f0f4;
}
</style>
