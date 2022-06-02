<template>
  <main class="base-view pb-90">
    <BaseBreadCrumb1
      title1="HOME"
      route1="home"
      title2="CONTACT"
      route2="contact"
    />
    <div class="content align-c">
      <h1>GET IN TOUCH!</h1>

      <template v-if="showFormSuccess === false">
        <!-- <form class="form mt-60 auto mw-400" @submit.prevent="contactUs"> -->
        <form class="form mt-60 auto mw-400">
          <div class="flex">
            <input
              class="first-name mr-20 input-border-bottom"
              type="text"
              v-model="first_name"
              placeholder="First Name"
              required
            />
            <input
              class="last-name input-border-bottom"
              type="text"
              v-model="last_name"
              placeholder="Last Name"
              required
            />
          </div>

          <input
            class="email mt-30 input-border-bottom"
            type="email"
            v-model="email"
            placeholder="Email"
          />

          <textarea
            class="message mt-30 minh-100 mw-400"
            type="text"
            v-model="message"
            placeholder="Message"
          />
          <div class="mt-20 align-r">
            <BaseBtn
              class="btz -fill-1 pointer prl-20 ptb-9 bdrd-3"
              type="submit"
            >
              SUBMIT
            </BaseBtn>
          </div>
        </form>
      </template>

      <template v-else>
        <div class="notification-bar align-c">
          <div class="fs-1p4em b">THANK YOU FOR REACHING OUT!</div>
          <div class="mt-5">
            You will receive a confirmation email <br />
            within 72 hours.
          </div>
        </div>
      </template>
    </div>
  </main>
</template>

<script>
export default {
  name: "contact-page",
  data() {
    return {
      showFormSuccess: false,

      first_name: "",
      last_name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    contactUs() {
      const formData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        message: this.message,
      };

      this.$store
        .dispatch("contactUsFrom", {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          message: formData.message,
        })
        .then(() => {
          (this.first_name = ""),
            (this.last_name = ""),
            (this.email = ""),
            (this.message = "");
          this.showFormSuccess = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 30px !important;
  padding: 15px;
}

@media (min-width: 600px) {
  .content {
    padding: 45px !important;
  }
}
</style>
