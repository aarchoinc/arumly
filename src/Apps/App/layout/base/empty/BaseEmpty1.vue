<template>
  <div class="align-c b">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "base-empty",
  props: {
    emptyClass: {
      type: String,
    },
  },
};
</script>
