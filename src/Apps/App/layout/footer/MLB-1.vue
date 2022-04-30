<template>
  <section class="mailing-list flex flex-fdc flex-jcc">
    <div>
      <div class="title">Join our mailing list</div>

      <form class="form mt-10 flex flex-wrap" @submit.prevent="newsletterMain">
        <input
          class="email"
          type="email"
          v-model="email"
          placeholder="Email"
          required
        />
        <input
          class="name"
          type="text"
          v-model="first_name"
          placeholder="First Name"
        />

        <button class="btn pointer" type="submit">SIGN UP</button>
      </form>
      <!--/.ML1-->
    </div>
    <div class="terms fs-p8em">
      By clicking "SIGN UP" I agree to receive news, promotions, information,
      and offers from Oarii. See our
      <router-link
        :to="{ name: 'privacy-policy' }"
        class="underline pointer"
        custom
        v-slot="{ navigate }"
        ><span @click="navigate">Privacy Policy</span></router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "mailing-list",
  data() {
    return {
      email: "",
      first_name: "",
    };
  },
  methods: {
    newsletterMain() {
      const formData = {
        email: this.email,
        first_name: this.first_name,
      };

      this.$store
        .dispatch("newsletterMain", {
          email: formData.email,
          first_name: formData.first_name,
        })
        .then(() => {
          this.email = "";
          this.first_name = "";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.mailing-list {
  // padding: 15px 30px 0px 50px;
}
.title {
  font-size: 1em;
  font-weight: 500;
}
.email,
.name {
  height: 36px;
}
.form * {
  margin-bottom: 10px;
}
.btn {
  width: 100%;
  background: linear-gradient(to right, #2f9fff, #3695e5);
  color: #ffffff;
  border-radius: 4px;
  font-size: 1.2em;
  font-weight: 600;
  padding: 0px !important;
}
@media (min-width: 480px) {
  /* ~~~~~~ min-width: 480px ~~~~~~ */
}
@media (min-width: 600px) {
  .title {
    font-size: 1.3em;
  }
  .terms {
    font-size: 1.1em;
  }
  .email {
    width: 250px;
  }
  .name {
    width: 190px;
  }
  .email,
  .name {
    height: 36px;
    margin-right: 10px;
  }
  .btn {
    width: 110px;
    font-size: 1.1em;
  }

  /* ~~~~~~ min-width: 600px ~~~~~~ */
}

@media (min-width: 768px) {
  /* ~~~~~~ min-width: 768px ~~~~~~ */
}
</style>
