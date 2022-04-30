export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    inputClass: {
      type: String,
    },
    label: {
      type: String,
      default: "",
    },
    value: [String, Number, Array],
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.targets.value);
    },
  },
};
