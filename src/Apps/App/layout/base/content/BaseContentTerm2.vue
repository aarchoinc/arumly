<template>
  <div :class="termClass">
    <div class="mt-10 b" :class="termClass">
      {{ term.term }}
    </div>
    <div class="ml-20" :class="defClass">
      {{ term.def }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NSDOu-1-1",
  props: ["termClass", "defClass", "term"],
};
</script>

<style lang="scss" scoped></style>
