<template>
  <section class="header pb-5">
    <div class="b pt-10 prl-5p">{{ heading }}</div>
    <div class="fs-p9em prl-5p" v-if="desc">
      {{ desc }}
    </div>
  </section>
</template>

<script>
export default {
  name: "settings-header",
  props: {
    heading: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
/* Header */
.header {
  border-bottom: solid 1px rgba(189, 192, 201, 0.3);
}
.header-top {
  border-top: solid 1px rgba(189, 192, 201, 0.3);
}
</style>
