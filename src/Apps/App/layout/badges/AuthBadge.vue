<template>
  <div class="auth flex flex-aic">
    <template v-if="$route.name !== 'signup'">
      <router-link class="signup" :to="{ name: 'signup' }">
        <button class="btn btn-1 primary-btn">SIGN UP</button>
      </router-link>
    </template>

    <template v-if="$route.name !== 'login'">
      <router-link :to="{ name: 'login' }">
        <div class="btn login-btn secondary-btn pointer">LOGIN</div>
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
.btn-1 {
  padding: 9px 20px !important;
  font-size: 0.8em !important;
  margin-right: 10px;
}
.login-btn {
  padding: 5px 11px !important;
  font-size: 0.7em !important;
}

.signup {
  display: none;
}
@media (min-width: 600px) {
  .signup {
    display: inline-block;
  }
  .login-btn {
    padding: 10px 25px !important;
    font-size: 0.8em !important;
    height: 30px;
  }
}
</style>
