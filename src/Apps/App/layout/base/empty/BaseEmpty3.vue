<template>
  <div class="align-c b">
    <div class="fs-1p6em">{{ heading }}</div>
    <div class="fs-1p6em">{{ heading_2 }}</div>
    <div class="fs-1p3em">{{ sub_heading }}</div>
  </div>
</template>

<script>
export default {
  name: "base-empty",
  props: {
    heading: {
      type: String,
      default: "INFO NOT AVALIBLE",
    },
    heading_2: {
      type: String,
    },
    sub_heading: {
      type: String,
    },
  },
};
</script>
