<template>
  <div>
    <div @mouseover="hover_1 = true" @mouseleave="hover_1 = false">
      <router-link
        class="route pointer"
        :to="{ name: '' }"
        @click="showHamburger()"
      >
        <div>Route 1</div>
      </router-link>
    </div>
    <!--/.my-cards-->

    <div @mouseover="hover_2 = true" @mouseleave="hover_2 = false">
      <router-link
        class="route pointer"
        :to="{ name: '' }"
        @click="showHamburger()"
      >
        <div>Route 2</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "library-push-nav",
  data() {
    return {
      hover_1: false,
      hover_2: false,
      hover_3: false,
    };
  },

  methods: {
    ...mapActions(["showHamburger"]),
  },
};
</script>

<style lang="scss" scoped>
.route {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  color: #bdc0c9;
  align-items: center;
  text-align: center;

  .icon {
    margin-right: 15px;
    width: 20px;
  }
}

a:hover,
.active {
  color: #ffffff;
  text-decoration: underline;
}
</style>
