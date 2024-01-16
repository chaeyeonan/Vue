<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello vue",
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
