<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    tempFunc(e) {
      this.value = e.target.value;
      this.$emit("search", this.value);
    },
  },
};
</script>

<template>
  <div class="search-container">
    <input type="text" :value="value" @input="tempFunc" />
    <font-awesome-icon icon="magnifying-glass" class="icon" />
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  border: 0.5px solid lightgray;
  padding: 0 15px;
}
input {
  outline: none;
  border: none;
  width: 200px;
}
.icon {
  width: 17px;
  color: gray;
}
</style>
