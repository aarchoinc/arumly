<template>
  <main class="base-view pb-90">
    <CheckoutBreadCrumb />
    CHECKOUT
  </main>
</template>

<script>
import CheckoutBreadCrumb from "@/Apps/Checkout/components/CheckoutBreadCrumb.vue";
export default {
  name: "cart-page",
  components: {
    CheckoutBreadCrumb,
  },
};
</script>

<style lang="scss" scoped></style>
