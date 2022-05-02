<template>
  <section class="p-20">
    <div class="fs-1p1em" style="text-align: center; color: #888888">
      BRINGING PEOPLE TOGETHER
    </div>

    <div class="flex flex-wrap flex-jcc mt-20">
      <iframe
        width="420"
        height="275"
        controls="0"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        style="border: none"
      >
      </iframe>

      <div class="b3-right mw-400">
        <h3 class="b">OPEN MIC NIGHTS</h3>
        <p class="mt-15">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed.
        </p>

        <BaseBtn class="btz -fill-1 pointer fs-1em b-500 mt-30 ptb-10 prl-30">
          SEE VIDEOS
        </BaseBtn>
      </div>
    </div>
  </section>
</template>

<script>
import items from "@/data/home/homeBanners.js";

export default {
  name: "home-banner-3",
  data() {
    return {
      items,
    };
  },
};
</script>

<style lang="scss" scoped>
.b3-right {
  margin-top: 20px;
  margin-left: -20px;
}

@media (min-width: 866px) {
  .b3-right {
    margin-top: 5px;
    margin-left: 30px;
  }
}
</style>
