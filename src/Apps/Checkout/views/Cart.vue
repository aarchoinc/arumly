<template>
  <main class="base-view pb-100">
    <CheckoutBreadCrumb />
    <div class="grid grid-cart mt-10 prl-20 mw-1000 auto">
      <div class="cart-left">
        <template v-if="items.length !== 0">
          <div
            class="flex flex-aic mt-25"
            v-for="(item, $index) in items"
            :key="$index"
          >
            <div class="close w-13 mr-30 pointer" @click="removeItem(item)">
              <img src="@/Apps/Checkout/assets/img/close-delete.svg" />
            </div>

            <div class="item flex flex-aic w-100p pb-20">
              <img
                class="w-90 mr-20"
                :src="baseFileUrl + item.thumbnail"
                alt="img"
              />

              <div class="item-right w-100p">
                <div class="capitalize">
                  {{ item.obj_name }}
                </div>
                <div class="price b">${{ item.pricing_price }}</div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="empty mt-60 align-c b ptb-60 auto fs-1p3em">
            ADD ITEMS TO CART
          </div>
        </template>
      </div>

      <div class="cart-right mt-25 summary p-25">
        <div class="b fs-1p1em">ORDER SUMMARY</div>

        <div class="flex flex-jcsb mt-40">
          <div>SUBTOTAL</div>
          <!-- <div class="tertiary">${{ totalSum() }}</div> -->
          <div class="tertiary" v-if="cartTotal">${{ cartTotal }}</div>
          <div class="tertiary" v-else>$0.00</div>
        </div>

        <div class="flex flex-jcsb mt-20">
          <div>SHIPPING</div>
          <div class="tertiary">Calculated at next step</div>
        </div>

        <div class="hl-4 mt-25"></div>

        <div class="flex flex-jcsb mt-25">
          <div class="b">TOTAL</div>
          <!-- <div class="tertiary">${{ totalSum() }}</div> -->
          <div class="tertiary" v-if="cartTotal">${{ cartTotal }}</div>
          <div class="tertiary" v-else>$0.00</div>
        </div>

        <div class="mt-40">
          <BaseBtn
            class="btz -fill-1 pointer fs-p9em b mt-5 ptb-10 prl-20 w-100p"
          >
            CONTINUE TO CHECKOUT
          </BaseBtn>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

import CheckoutBreadCrumb from "@/Apps/Checkout/components/CheckoutBreadCrumb.vue";

export default {
  name: "cart-page",
  components: {
    CheckoutBreadCrumb,
  },
  computed: {
    ...mapState({
      items: (state) => state.CheckoutModule.cartItems,
      cartTotal: (state) => state.CheckoutModule.cartTotal.total,
    }),
  },

  methods: {
    fetch() {
      this.$store.dispatch("fetchCartItems");
      this.$store.dispatch("fetchCartTotal");
    },
    removeItem(item) {
      this.$store.dispatch("removeCartItem", {
        id: item.id,
      });
    },

    totalSum() {
      let prices = [];

      this.items.forEach((item) => {
        var num = parseFloat(item.pricing_price);
        prices.push(num);
      });

      return prices.reduce((a, b) => a + b, 0).toFixed(2);
    },
  },

  created() {
    this.fetch();
    // this.totalSum();
  },
};
</script>

<style lang="scss" scoped>
.grid-cart {
  grid-template-areas:
    "cl cl cl cl cl cl cl cl cl cl cl cl"
    "cr cr cr cr cr cr cr cr cr cr cr cr";
}
.cart-left {
  grid-area: cl;
}
.cart-right {
  grid-area: cr;

  background-color: #f9f0f4;
  padding: 15px;
  border-radius: 5px;
}
.item {
  border-bottom: solid 1px #000000;
}
.empty {
  border: 2px solid #000000;
  color: #000000;
  padding: 15px;
  border-radius: 5px;
  max-width: 320px;
}

@media (min-width: 768px) {
  .grid-cart {
    grid-template-areas: "cl cl cl cl cl cl . cr cr cr cr cr";
  }
  .item-right {
    display: flex;
    justify-content: space-between;
  }
  .cart-right {
    max-width: 400px;
    min-height: 200px;
  }
}
</style>
