<template>
  <main class="base-view pb-90">
    <BaseBreadCrumb1
      title1="HOME"
      route1="home"
      title2="CONTACT"
      route2="contact"
    />
    <div class="p-45 align-c">
      <h1>GET IN TOUCH!</h1>

      <form class="form mt-60 auto mw-400" @submit.prevent="newsletterMain">
        <div class="flex">
          <input
            class="first-name mr-20 input-border-bottom"
            type="text"
            v-model="firstName"
            placeholder="First Name"
            required
          />
          <input
            class="last-name input-border-bottom"
            type="text"
            v-model="lastName"
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
          class="message mt-30 minh-100"
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
      <!--/.ML1-->
    </div>
  </main>
</template>

<script>
export default {
  name: "contact-page",
  components: {},
};
</script>

<style lang="scss" scoped></style>
