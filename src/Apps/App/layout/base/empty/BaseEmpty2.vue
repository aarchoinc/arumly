<template>
  <div class="mt-60 align-c b">
    <div>{{ notice }}</div>
    <div>{{ notice_2 }}</div>
    <div>{{ notice_3 }}</div>
    <div>{{ notice_4 }}</div>
  </div>
</template>

<script>
export default {
  name: "base-empty",
  props: {
    notice: {
      type: String,
    },
    notice_2: {
      type: String,
    },
    notice_3: {
      type: String,
    },
    notice_4: {
      type: String,
    },
  },
};
</script>
