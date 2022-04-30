<template>
  <section
    class="bgImg"
    :style="{
      backgroundImage: `url(${backgroundUrl})`,
    }"
  >
    <div class="flex flex-jcsb flex-aic mw-700 auto ptb-40">
      <h1></h1>
      Create Your Own <br />
      Workouts With <br />
      IIXOA Cards
    </div>
  </section>
</template>

<script>
import backgroundUrl from "@/Apps/App/assets/default/default-banner-1.png";

export default {
  name: "base-hero-slot-1",
  props: {
    overlayClass: {
      type: String,
    },
  },
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
  //   padding: 20px;
  //   display: flex;
  //   flex-direction: column;
  //   text-align: justify;
  height: calc(100vh / 2);
  //   align-items: center;
}
.btn {
  padding: 6px 20px !important;
  font-size: 0.7em !important;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}
.btn-2 {
  padding: 6px 20px !important;
}
.text {
  text-align: center;
  padding: 20px;
}

.img {
  width: 300px !important;
}

@media (min-width: 480px) {
  .btn {
    padding: 8px 25px !important;
    font-size: 0.8em !important;
  }
}
@media (min-width: 600px) {
  .btn {
    padding: 11px 30px !important;
    font-size: 1.1em !important;
  }
}
@media (min-width: 768px) {
  .changer {
    margin-top: -60px;

    img {
      width: 30px;
    }
  }
}

@media (min-width: 900px) {
  .slide-1 {
    flex-wrap: nowrap;
    padding: 0px 5% 0px 5%;
  }
  .text {
    text-align: left;
    padding: 0px;
  }
  .img {
    margin-right: 40px;
  }
}
</style>
