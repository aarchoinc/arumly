<template>
  <div class="mt-30p align-c b">
    <div class="fs-1p5em">
      It look's like you're expericing some network issues,<br />
      please click the back button and try again!
    </div>

    <div class="mt-40 quaternary pointer" @click="$router.go(-1)">
      <h2>Click To Go Back</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-not-found",
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
};
</script>
