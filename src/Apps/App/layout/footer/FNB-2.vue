<template>
  <section>
    <div class="footer-nav">
      <div class="links">
        <div class="title">COMPANY</div>
        <ul>
          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Careers</li>
          </router-link>

          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">About</li>
          </router-link>

          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Parent Company</li>
          </router-link>
          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Company News</li>
          </router-link>
        </ul>
      </div>
      <!--/.links-sec-1-->

      <div class="links">
        <div class="title">PRODUCTS</div>
        <ul>
          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Plans</li>
          </router-link>

          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Add-Ons</li>
          </router-link>
        </ul>
      </div>
      <!--/.links-sec-2-->

      <div class="links">
        <div class="title">SUPPORT</div>
        <ul>
          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Terms</li>
          </router-link>

          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Privacy</li>
          </router-link>
        </ul>
      </div>
      <!--/.links-sec-3-->
    </div>
    <!--/.footer-nav-->
  </section>
</template>

<script>
export default {
  name: "FooterLinks_1",
};
</script>

<style lang="scss" scoped>
.footer-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  color: #ffffff;
}
.links {
  margin-top: 20px;
  margin-right: 40px;
  li {
    margin-top: 12px;
    cursor: pointer;
  }
  li:hover {
    text-decoration: underline;
  }
}
.title {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
