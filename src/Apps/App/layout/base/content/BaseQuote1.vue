<template>
  <div :class="baseClass">
    <q>
      {{ quote }}
    </q>

    <div class="b-300">{{ author }}</div>
  </div>
</template>

<script>
export default {
  name: "base-quote-1",

  props: {
    baseClass: {
      type: String,
    },
    quote: {
      type: String,
    },
    author: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
