<template>
  <div class="auth flex flex-aic flex-jcc mt-25">
    <router-link class="signup" :to="{ name: 'signup' }">
      <button class="btn btn-1 primary-btn" @click="showHamburger">
        Try IIXOA Free
      </button>
    </router-link>

    <router-link class="" :to="{ name: 'login' }">
      <div class="btn login-btn secondary-btn pointer" @click="showHamburger">
        LOGIN
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "mobile-auth-badge",
  methods: {
    ...mapActions(["showHamburger"]),
  },
};
</script>

<style lang="scss" scoped>
.bg-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

nav {
  position: fixed;
  top: 55px;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #10131a;
  overflow-y: hidden;
  z-index: 5;
}

.auth {
  a {
    border-top: none;
    padding: 0px 5px 0px 5px;
  }
  a:hover,
  a:active {
    background-color: transparent !important;
  }
}

.btn-1 {
  padding: 9px 10px !important;
  font-size: 0.9em !important;
  margin-right: 10px;
}
.login-btn {
  padding: 10px 28px !important;
  font-size: 0.9em !important;
  height: 30px;
}
</style>
