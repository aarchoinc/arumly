<template>
  <div class="auth flex flex-aic">
    <template v-if="$route.name !== 'signup'">
      <router-link class="signup" :to="{ name: 'signup' }">
        <BaseBtn class="btz -fill-1 fs-1em ptb-14 b-600 bdrd-3 pointer"
          >SIGN UP</BaseBtn
        >
      </router-link>
    </template>

    <template v-if="$route.name !== 'login'">
      <router-link :to="{ name: 'login' }">
        <BaseBtn class="btz -fill-2 fs-1em ptb-14 b-600 bdrd-3 pointer"
          >LOGIN</BaseBtn
        >
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "auth-badge",
};
</script>

<style lang="scss" scoped>
.btz {
  padding: 9px 20px !important;
  font-size: 0.8em !important;
  margin-right: 10px;
}

// .signup {
//   display: none;
// }
// @media (min-width: 600px) {
//   .signup {
//     display: inline-block;
//   }
// }
</style>
