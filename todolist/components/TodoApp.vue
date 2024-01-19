<script>
import TodoCreater from "./TodoCreater.vue";
import TodoItemList from "./TodoItemList.vue";
import Calendar from "./Calendar.vue";
import jsonData from "../assets/todoData.json";

// 날짜 포맷 함수
const formatDate = (date) => {
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
};

export default {
  components: {
    TodoCreater,
    TodoItemList,
    Calendar,
  },
  data() {
    return {
      createdDate: formatDate(new Date()),
      todolist: jsonData.todoData,
      todayDate: String(new Date()),
    };
  },
  computed: {
    // 읽기전용 !!!
    todolistOfToday() {
      return this.todolist.filter(
        (todo) => todo.createdDate === this.createdDate
      );
    },
  },

  methods: {
    insertTodo(task) {
      if (task.trim()) {
        this.todolist.push({
          id: Math.floor(Math.random() * 10000),
          task: task,
          done: false,
          createdDate: this.createdDate,
        });
        this.$refs.todoItemList.scrollToBottom();
      }
    },
    deleteTodo(id) {
      this.todolist = this.todolist.filter((item) => item.id !== id);
      // const index = this.todolist.findIndex((item) => item.id === id);
      // const index = this.todolist.findIndex((item) => item.id === id);
      // if (index !== -1) {
      //   this.todolist.splice(index, 1);
      // }
    },
    updateTodo(id, task) {
      this.todolist.forEach((todo) => todo.id === id && (todo.task = task));
    },
    changeDate(date) {
      this.createdDate = formatDate(date);
    },
  },
};
</script>

<template>
  <div class="todoapp-container">
    <div class="top-container">
      <div class="date-title">
        {{ createdDate }}
      </div>
      <div class="calender-todolist-container">
        <calendar :todayDate="todayDate" @changeDate="changeDate"></calendar>
        <todo-item-list
          :todoItems="todolistOfToday"
          :date="createdDate"
          @delete="deleteTodo"
          @update="updateTodo"
          ref="todoItemList"
        />
      </div>
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
  width: 100%;
}
.date-title {
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0;
}
.calender-todolist-container {
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  gap: 50px;
}
</style>
