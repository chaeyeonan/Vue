<script>
import TodoCreater from "./TodoCreater.vue";
import TodoItemList from "./TodoItemList.vue";
import jsonData from "../assets/todoData.json";

export default {
  components: {
    TodoCreater,
    TodoItemList,
  },
  data() {
    const currentDate = new Date();
    return {
      createdDate: `${currentDate.getFullYear()}년 ${
        currentDate.getMonth() + 1
      }월 ${currentDate.getDate()}일`,

      todolist: jsonData.todoData,
    };
  },
  methods: {
    insertData(task) {
      if (task.trim()) {
        this.todolist.push({
          id: Math.floor(Math.random() * 10000),
          task: task,
          done: false,
          createdDate: new Date().toISOString().slice(0, 10),
        });
      }
      task = "";
    },
    deleteTodo(id) {
      // this.todolist = this.todolist.filter((item) => item.id !== id);
      const index = this.todolist.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.todolist.splice(index, 1);
      }
    },
  },
};
</script>

<template>
  <div class="todoapp-container">
    <div class="top-container">
      <div class="date">{{ createdDate }}</div>
      <todo-item-list
        :todoItems="todolist"
        :date="createdDate"
        @delete="deleteTodo"
      />
    </div>
    <todo-creater @insertTask="insertData" />
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
