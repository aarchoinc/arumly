<template>
  <nav>
    <div class="routes flex">
      <router-link class="route pointer" :to="{ name: 'home' }" exact>
        HOME
      </router-link>

      <router-link
        class="route pointer"
        :to="{ name: 'shop-all-products', query: { limit: 20 } }"
        exact
      >
        SHOP
      </router-link>

      <!-- <router-link class="route pointer" :to="{ name: 'events' }" exact>
        EVENTS
      </router-link> -->

      <router-link class="route pointer" :to="{ name: 'about' }" exact>
        ABOUT
      </router-link>

      <router-link class="route pointer" :to="{ name: 'contact' }" exact>
        CONTACT
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "header-navigation",
};
</script>

<style lang="scss" scoped>
nav {
  a:hover,
  .active {
    text-decoration: underline;
    font-weight: bold;
  }
}
.routes {
  font-size: 1em;
  color: #bcd2ed;
}
.route {
  margin-right: 30px;
}
</style>
