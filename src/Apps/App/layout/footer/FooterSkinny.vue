<template>
  <footer class="footer-ss fs-p9em align-c">
    <div class="flex flex-wrap flex-jcc">
      <router-link class="pointer" :to="{ name: 'about' }"> About </router-link>
      <router-link class="pointer" :to="{ name: '' }">
        Terms <span class="mblz-fss">of Use</span>
      </router-link>
      <router-link class="pointer" :to="{ name: '' }">
        Privacy <span class="mblz-fss"> Policy</span>
      </router-link>
    </div>

    <div class="mt-5">&copy; 2022 COMPANY</div>
  </footer>
</template>

<script>
export default {
  name: "footer-skinny",
};
</script>

<style scoped>
.footer-ss {
  background: #192844;
  padding: 10px;
  border-top: solid 1px rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

a {
  padding-right: 25px;
  color: #ffffff;
}
a:nth-last-child(1) {
  padding-right: 0px;
}
a:hover {
  text-decoration: underline;
}
</style>
