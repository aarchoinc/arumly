<template>
  <section>
    <div class="footer-nav">
      <div class="links">
        <div class="title">COMPANY</div>
        <ul>
          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Careers</li>
          </router-link>

          <router-link :to="{ name: 'about' }" custom v-slot="{ navigate }">
            <li @click="navigate">About</li>
          </router-link>

          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">News</li>
          </router-link>
        </ul>
      </div>
      <!--/.links-sec-1-->

      <div class="links">
        <div class="title">PRODUCTS</div>
        <ul>
          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Art Supplies</li>
          </router-link>

          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Paintings</li>
          </router-link>

          <router-link :to="{ name: '' }" custom v-slot="{ navigate }">
            <li @click="navigate">Notebooks</li>
          </router-link>
        </ul>
      </div>
      <!--/.links-sec-2-->

      <div class="links">
        <div class="title">HOURS</div>
        <ul>
          <li>Mon - Fri &nbsp; | &nbsp; 9:00a - 5:00p</li>
          <li>Saturday &nbsp; | &nbsp; 10:00a - 3:00p</li>
          <li>Sunday &nbsp; <span class="ml-8">|</span> &nbsp; Closed</li>
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
