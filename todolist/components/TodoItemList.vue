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
  methods: {
    deleteData(id) {
      this.todolist = this.todolist.filter((item) => item.id !== id);
    },
  },
};
</script>

<template>
  <div class="list-container">
    <todo-item
      v-for="todos in todolist"
      :key="todos.id"
      :todo="todos"
      @deleteId="deleteData"
    />
  </div>
</template>

<style scoped>
.list-container {
  height: 85%;
  overflow: auto;
}
</style>
