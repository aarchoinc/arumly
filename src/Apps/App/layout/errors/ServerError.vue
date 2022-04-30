<template>
  <div class="mt-20p align-c b">
    <div class="fs-1p5em">{{ error }}<span class="nb"> Server Error</span></div>
    <div class="fs-1p5em">
      The server has encountered an error <br />and could not fufill your
      request.
    </div>

    <div class="mt-40 quaternary pointer" @click="$router.go(-1)">
      <h2>Click To Go Back</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "server-error",
  props: {
    error: {
      type: String,
      required: true,
    },
  },
};
</script>
