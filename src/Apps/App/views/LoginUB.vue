<template>
  <main id="login" class="card-style">
    <div class="login-form">
      <h1 class="headline mb-30 b">Login</h1>

      <form class="login" @submit.prevent="login">
        <div class="con-put-1">
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="email"
            required
            class="input-underline white-bg input-bg bg-un pl-40"
          />
        </div>
        <div class="con-put-2">
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
            required
            class="input-underline white-bg input-bg bg-ln pl-40"
          />
        </div>

        <div class="login-button">
          <button class="button mt-15" type="submit">LOGIN</button>
        </div>
      </form>
      <router-link to="#">
        <div
          class="forgot-password b-300 mt-10 mr-10"
          v-on:click="showPopup = !showPopup"
        >
          Forgot Password?
        </div>
      </router-link>
    </div>
    <!--/.login-form-->

    <!-- Popup itself -->
    <div id="overlay" v-show="showPopup">
      <div id="test-popup" class="white-popup animated fadeInDown faster">
        <div class="exit" v-on:click="showPopup = !showPopup">X</div>
        <div class="popup-header pt-20">Forgot your password?</div>
        <div class="desc mt-20">
          Enter the email address associated with your account and we will send
          you a link to reset your password.
        </div>
        <div class="mt-20">
          <form class="pwd-reset">
            <input
              type="email"
              v-model="email"
              placeholder="Email Address"
              required
              class="input-underline"
            />

            <div class="login-button">
              <button class="button mt-15" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--/#overlay -->
  </main>
</template>

<script>
export default {
  name: "login-ub",
  data() {
    return {
      showPopup: false,
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "centers" });
          // this.$router.push({ name: "feed" });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}

.white-popup {
  position: relative;
  background: #fff;
  padding: 25px;
  width: 350px;
  max-width: 400px;
  margin: 0 auto;
  top: 30%;
  text-align: center;
  font-size: 14px;
}

/* ======= Module Popup ======= */
.popup-header {
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: bold;
}

.card-style {
  margin: 0 auto;
  padding: 65px 30px;
  border-radius: 6px;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
  max-width: 380px;
  max-height: 443px;
}

#login {
  margin: 15% auto 10vh auto;
}

.login-user {
  margin: 0 auto;
}

.login-form {
  color: #000;
  list-style-type: none;
}
.headline {
  text-align: center;
}
.forgot-password {
  text-align: right;
}

a {
  font-weight: bold;
}
a:hover {
  color: #2c3840;
  text-decoration: underline;
}

.login input,
.pwd-reset input {
  padding: 15px 0px;
  margin-bottom: 15px;
  width: 100%;
  border: none;
  border-radius: 3px;
}
.pwd-reset {
  input {
    padding: 15px;

    background-color: #f1f1f1;
    border: 1px solid #cccccc;
  }

  ::placeholder {
    font-weight: 300;
    font-size: 12px;
  }
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #374a65;
  opacity: 1; /* Firefox */
  font-weight: 500;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #374a65;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #374a65;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.button {
  width: 100%;
  background-color: #bcd2ed;
  padding: 14px 0px;
  border: none;
  border-radius: 3px;
}

.con-put-1,
.con-put-2 {
  display: flex;
}
.icon-bg {
  img {
    max-width: 15px;
  }
  background-color: #ffffff;
  max-height: 43.5px;
  padding: 15px 20px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.con-put-2 .icon-bg {
  max-height: 43.5px;
}

.desc {
  font-size: 12px;
}

.exit {
  float: right;
}
</style>
