<template>
  <div class="mt-30p align-c b">
    <h1 class="uppercase">THE {{ resource }} YOU'RE LOOKING FOR IS NOT HERE</h1>

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
