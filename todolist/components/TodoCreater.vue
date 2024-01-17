<script>
import { InsertData } from "../functions/functions";

export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    changeKewords(e) {
      this.task = e.target.value;
    },
    pressEnter() {
      InsertData(this.task);
      this.task = "";
    },
  },
};
</script>

<template>
  <div class="input-container">
    <input
      :value="task"
      @input="changeKewords"
      @keydown.enter="pressEnter"
      class="input"
      placeholder="할 일을 입력하세요"
    />
  </div>
</template>

<style scoped>
.input-container {
  width: 98%;
  height: 50px;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
input {
  width: 90%;
  height: 50%;
  border: none;
  outline: none;
}
</style>
