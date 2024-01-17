<script>
import TodoItem from "./TodoItem.vue";
import jsonData from "../assets/todoData.json";

export default {
  components: {
    TodoItem,
  },
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      todolist: jsonData.todoData,
    };
  },
};
</script>

<template>
  <div>
    <todo-item v-for="todos in todolist" :key="todos.id" :todo="todos" />
  </div>
</template>

<style scoped>
.list-container {
  background: white;
  border-radius: 10px;
}
</style>
