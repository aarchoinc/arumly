<template>
  <main class="base-view pb-60">
    <BaseBreadCrumb1
      title1="HOME"
      route1="home"
      title2="ABOUT"
      route2="about"
    />
    <section class="align-c mw-1000 auto">
      <h1>ABOUT US</h1>

      <section
        class="bgImg mt-30"
        :style="{
          backgroundImage: `url(${backgroundUrl})`,
        }"
      >
        <div class="mw-320 flex flex-aic fs-1p2em auto secondary">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
        </div>
      </section>

      <h2 class="mt-30">Lorem ipsum dolor sit.</h2>

      <p class="mt-30 tertiary align-l">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>

      <p class="mt-20 tertiary align-l">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </section>
  </main>
</template>

<script>
import backgroundUrl from "@/Apps/App/assets/img/arumly/banner-5-arumly.jpg";

export default {
  name: "about-page",
  data() {
    return {
      backgroundUrl,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.bgImg {
  max-height: 330px;
}

section {
  padding: 15px;
  line-height: 2.2;
}

@media (min-width: 600px) {
  section {
    padding: 45px;
    line-height: 2.5;
  }
}
</style>
