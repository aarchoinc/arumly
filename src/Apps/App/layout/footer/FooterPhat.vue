<template>
  <footer class="footer">
    <!-- <Maling-List-Basic-1 class="auto pt-15 prl-5p" id="mailing" /> -->
    <FNB2 class="pt-15 prl-5p auto" />
    <FooterSkinny class="mt-35" />
  </footer>
</template>

<script>
// import MLB1 from "@/Apps/App/layout/footer/MLB-1.vue";
import FNB2 from "@/Apps/App/layout/footer/FNB-2.vue";
import FooterSkinny from "@/Apps/App/layout/footer/FooterSkinny.vue";

export default {
  name: "footer-phat",
  components: {
    // "Maling-List-Basic-1": MLB1,
    FNB2,
    FooterSkinny,
  },
};
</script>

<style scoped>
footer {
  background: #000000;
}
</style>
