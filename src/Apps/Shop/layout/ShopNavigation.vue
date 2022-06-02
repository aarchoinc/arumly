<template>
  <nav>
    <div class="routes flex">
      <router-link
        class="route pointer"
        :to="{ name: 'shop-all-products', query: { limit: 20 } }"
        exact
      >
        ALL
      </router-link>

      <router-link class="route pointer" :to="{ name: 'shop-notebooks' }" exact>
        NOTEBOOKS
      </router-link>

      <router-link class="route pointer" :to="{ name: 'shop-paper' }" exact>
        PAPER
      </router-link>

      <router-link
        class="route pointer"
        :to="{
          name: 'shop-writing-tools',
        }"
        exact
      >
        WRITING TOOLS
      </router-link>

      <router-link class="route pointer" :to="{ name: 'shop-paint' }" exact>
        PAINT
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "base-basic-nav-1",
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

.header-nav {
  display: none;
}

@media (min-width: 600px) {
  .header-nav {
    display: inline;
  }
  /* ~~~~~~ min-width: 480px ~~~~~~ */
}
</style>
