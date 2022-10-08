<template>
  <main id="login" class="auto">
    <div class="login-form">
      <div class="headline b fs-1p7em align-c">WELCOME!</div>
      <div class="headline mb-20 fs-p9em align-c">
        LOGIN TO YOUR ARUMLY ACCOUNT
      </div>

      <form class="login" @submit.prevent="login">
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email Address"
          required
        />
        <input
          class="mt-45"
          type="password"
          id="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <router-link class="align-l mt-5" :to="{ name: 'reset' }" tag="div">
          <a class="forgot-password fs-p8em b-300 tertiary"
            >Forgot your password?</a
          >
        </router-link>

        <BaseBtn
          class="btz -fill-1 fs-1em ptb-14 b-600 w-100p bdrd-3 mt-50"
          type="submit"
        >
          LOGIN
        </BaseBtn>

        <p>{{ error }}</p>
      </form>
    </div>
    <!--/.login-form-->

    <!-- <router-link class="align-c mt-20 b" :to="{ name: 'signup' }" tag="div">
      Don’t have an account?
      <a class="quinary poniter b"> Create Account </a>
    </router-link> -->
  </main>
</template>

<script>
export default {
  name: "auth-login",
  data() {
    return {
      showPopup: false,
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("login", {
        email: formData.email,
        password: formData.password,
      });
      // .then(() => {
      //   this.$router.go(-1);
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  margin-top: 120px !important;
  padding: 40px;
  min-width: 320px;
  max-width: 450px;
  border: 1px solid #000000;
}

.login-user {
  margin: 0 auto;
}

.headline {
  text-align: center;
  line-height: 35px;
}
.forgot-password {
  text-align: right;
}

a:hover {
  text-decoration: underline;
}

input {
  padding: 15px 10px;
  padding-bottom: 6px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #000000;
  font-size: 14px;
  color: #2b323b;
  background: #ffffff;
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
  background-color: transparent !important;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #374a65;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #374a65;
}

input:focus {
  outline: none;
}

.exit {
  float: right;
}
</style>
