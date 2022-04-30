<template>
  <div class="mt-60 align-c b">
    <h1>{{ heading }}</h1>
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
  },
};
</script>
