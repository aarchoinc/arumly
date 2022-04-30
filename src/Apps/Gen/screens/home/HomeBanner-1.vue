<template>
  <section
    class="bgImg"
    :style="{
      backgroundImage: `url(${backgroundUrl})`,
    }"
  >
    <div class="flex flex-fdc flex-jcc auto">
      <div class="headings">
        S h a r e. <br />
        Connect.<br />
        F e e l .
      </div>

      <BaseBtn class="btz -fill-1 pointer fs-p9em b mt-20 ptb-10 prl-20">
        JOIN OUR COMMUNITY
      </BaseBtn>
    </div>
  </section>
</template>

<script>
import backgroundUrl from "@/Apps/App/assets/default/default-banner-4.jpeg";

export default {
  name: "base-hero-slot-1",

  data() {
    return {
      backgroundUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.bgImg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  max-height: 300px;
  overflow: hidden;
  display: flex;
  img {
    max-width: 100% !important;
    height: auto !important;
  }
  height: calc(100vh / 2);
}

.headings {
  font-size: 2.7em;
  font-weight: bold;
}

@media (min-width: 480px) {
}
@media (min-width: 600px) {
}
@media (min-width: 768px) {
}

@media (min-width: 900px) {
}
</style>
