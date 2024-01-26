<script>
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
    insertTodoItem() {
      if (this.task.trim())
        this.$store.commit("todoApp/ADD_TODOITEM", this.task);
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
      @keydown.enter="insertTodoItem"
      class="input"
      placeholder="할 일을 입력하세요"
    />
    <div class="button" @click="insertTodoItem">추가</div>
  </div>
</template>

<style scoped>
.input-container {
  width: 98%;
  height: 50px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
input {
  width: 90%;
  height: 50%;
  border: none;
  outline: none;
}
.button {
  font-size: 15px;
  padding: 8px 20px;
  background: lightblue;
  border-radius: 10px;
}
</style>
