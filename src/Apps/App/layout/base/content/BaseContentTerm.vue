<template>
  <div :class="termClass">
    <div class="mt-20 b" :class="termClass">
      {{ term }}
    </div>
    <div class="mt-5 ml-20" :class="defClass">
      {{ def_1 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NSDOu-1-1",
  props: {
    termClass: {
      type: String,
    },
    defClass: {
      type: String,
    },
    term: {
      type: String,
    },
    def_1: {
      type: String,
    },
    def_2: {
      type: String,
    },
    def_3: {
      type: String,
    },
    def_4: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
