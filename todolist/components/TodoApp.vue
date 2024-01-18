<script>
import TodoCreater from "./TodoCreater.vue";
import TodoItemList from "./TodoItemList.vue";
import jsonData from "../assets/todoData.json";

const currentDate =
  new Date().getFullYear() +
  "-" +
  String(new Date().getMonth() + 1).padStart(2, "0") +
  "-" +
  String(new Date().getDate()).padStart(2, "0");

export default {
  components: {
    TodoCreater,
    TodoItemList,
  },
  data() {
    // const currentDate = "2023-01-10";
    return {
      createdDate: currentDate,
      todolist: jsonData.todoData,
    };
  },
  computed: {
    todolistOfToday() {
      return this.todolist.filter(
        (todo) => todo.createdDate === this.createdDate
      );
    },
  },
  methods: {
    insertTodo(task) {
      if (task.trim()) {
        this.todolistOfToday.push({
          id: Math.floor(Math.random() * 10000),
          task: task,
          done: false,
          createdDate: this.createdDate,
        });
      }
    },
    deleteTodo(id) {
      // this.todolist = this.todolist.filter((item) => item.id !== id);
      const index = this.todolistOfToday.findIndex((item) => item.id === id);
      // const index = this.todolist.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.todolistOfToday.splice(index, 1);
      }
    },
    updateTodo(id, task) {
      this.todolist.forEach((todo) => todo.id === id && (todo.task = task));
    },
  },
};
</script>

<template>
  <div class="todoapp-container">
    <div class="top-container">
      <div class="date">{{ createdDate }}</div>
      <todo-item-list
        :todoItems="todolistOfToday"
        :date="createdDate"
        @delete="deleteTodo"
        @update="updateTodo"
      />
    </div>
    <todo-creater @insertTask="insertTodo" />
  </div>
</template>

<style scoped>
.todoapp-container {
  box-sizing: border-box;
  padding: 50px 100px;
  margin: 0;
  background: lightblue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-container {
  height: calc(100% - 50px);
  box-sizing: border-box;
}
.date {
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0;
}
</style>
