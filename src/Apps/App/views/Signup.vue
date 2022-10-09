<template>
  <main id="signup" class="auto">
    <div class="signup-form">
      <div class="headline b fs-1p7em align-c">WELCOME!</div>
      <div class="headline mb-20 fs-p9em align-c">GET STARTED WITH ARUMLY</div>

      <form class="signup" @submit.prevent="register" autocomplete="off">
        <input
          type="text"
          id="first-name"
          v-model="first_name"
          placeholder="First Name"
          required
        />

        <input
          class="mt-25"
          type="text"
          id="last-name"
          v-model="last_name"
          placeholder="Last Name"
          required
        />

        <input
          class="mt-25"
          type="email"
          id="email"
          v-model="email"
          placeholder="Email"
          required
          autocomplete="off"
        />

        <input
          class="mt-25"
          type="password"
          id="password"
          v-model="password"
          placeholder="Password"
          required
          autocomplete="chrome-off"
        />

        <!-- <BaseCustomSelectWhite
          :options="countryChoice"
          :default="selectCountry"
          @input="country = $event"
        /> -->

        <BaseBtn
          class="btz -fill-1 fs-1em ptb-14 b-600 w-100p bdrd-3 mt-50"
          type="submit"
        >
          SIGN UP
        </BaseBtn>
        <section class="fs-1em mt-10 align-c">
          By singing up, you agree to our
          <router-link :to="{ name: '' }" tag="span" class="underline pointer">
            Terms</router-link
          >
          ,
          <router-link :to="{ name: '' }" tag="span" class="underline pointer">
            Privacy
          </router-link>
          and
          <router-link :to="{ name: '' }" tag="span" class="underline pointer">
            Cookie Policy
          </router-link>
        </section>
      </form>

      <router-link class="align-c mt-30 b" :to="{ name: 'login' }" tag="div">
        Already on Arumly?
        <a class="b-300 tertiary poniter b fs-p9em">Login</a>
      </router-link>
    </div>
    <!--/.signup-form-->
  </main>
</template>

<script>
// import countryChoice from "@/data/app/countries-2.json";

export default {
  name: "auth-signup",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      country: "",
      errors: null,
      // countryChoice,
      selectCountry: "Select Country",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("createAccount", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        // country: this.country,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "@/Apps/App/assets/css/mixins/content/cards.scss";

#signup {
  margin-top: 120px !important;
  padding: 40px;
  min-width: 320px;
  max-width: 450px;
  border: 1px solid #000000;
}

.signup-user {
  margin: 0 auto;
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

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
input:-webkit-autofill {
  appearance: menulist-button;
  background-color: transparent !important;
  background-image: none !important;
  color: #2b323b !important;
}
.button {
  width: 100%;
  background-color: #bcd2ed;
  padding: 14px 0px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
}
.label {
  text-transform: capitalize;
  font-size: 1.1em;
}
</style>
