<template>
  <div :class="titleClass">
    {{ data.title }}
  </div>
</template>

<script>
export default {
  name: "get-title",
  props: {
    titleClass: {
      type: String,
    },
    data: {
      type: Object,
    },
  },
  methods: {
    getTitle(data) {
      let title = this.stripTags(data);

      return title.length > 80 ? title.substring(0, 84) + "..." : title;
    },

    stripTags(text) {
      return text.replace(/(<([^>]+)>)/gi, "");
    },
  },
};
</script>

<style lang="scss" scoped></style>
