<template>
  <div :class="paraClass">
    <div class="pt-10" v-if="para_1">
      {{ para_1 }}
    </div>
    <div class="pt-10" v-if="para_2">
      {{ para_2 }}
    </div>
    <div class="pt-10" v-if="para_3">
      {{ para_3 }}
    </div>
    <div class="pt-10" v-if="para_4">
      {{ para_4 }}
    </div>
    <div class="pt-10" v-if="para_5">
      {{ para_5 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NSDOu-1-1",
  props: {
    paraClass: {
      type: String,
    },
    para_1: {
      type: String,
    },
    para_2: {
      type: String,
    },
    para_3: {
      type: String,
    },
    para_4: {
      type: String,
    },
    para_5: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
