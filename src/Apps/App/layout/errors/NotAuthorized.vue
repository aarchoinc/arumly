<template>
  <div class="mt-30p align-c b">
    <h1 class="uppercase">{{ message }}</h1>
    <h1 class="uppercase mt-5">{{ message_2 }}</h1>

    <div class="mt-40 quaternary pointer" @click="$router.go(-1)">
      <h2>Click To Go Back</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-not-authorized",
  props: {
    message: {
      type: String,
      required: true,
    },
    message_2: {
      type: String,
    },
  },
};
</script>
