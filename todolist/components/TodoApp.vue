<script>
import TodoCreater from "./TodoCreater.vue";
import TodoItemList from "./TodoItemList.vue";
import Calendar from "./Calendar.vue";
import jsonData from "../assets/todoData.json";
import Search from "./Search.vue";

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
    Search,
  },
  data() {
    return {
      todolist: jsonData.todoData,
      todayDate: formatDate(new Date()),
      searchKeywords: "",
    };
  },
  computed: {
    // 검색 및 날짜별 필터링을 모두 고려하는 새로운 computed 속성
    filteredTodolist() {
      let filteredList = this.todolist;

      // 날짜별 필터링
      filteredList = filteredList.filter(
        (todo) => todo.createdDate === this.todayDate
      );

      // 검색어가 있는 경우 추가 필터링
      if (this.searchKeywords) {
        filteredList = filteredList.filter((todo) =>
          todo.task.includes(this.searchKeywords)
        );
      }

      return filteredList;
    },
  },

  methods: {
    insertTodo(task) {
      if (task.trim()) {
        this.todolist.push({
          id: Math.floor(Math.random() * 10000),
          task: task,
          done: false,
          createdDate: this.todayDate,
        });
        this.$refs.todoItemList.scrollToBottom();
      }
    },
    deleteTodo(id) {
      this.todolist = this.todolist.filter((item) => item.id !== id);
    },
    updateTodo(id, task) {
      this.todolist.forEach((todo) => todo.id === id && (todo.task = task));
    },
    changeDate(date) {
      this.todayDate = formatDate(date);
    },
    searchTodo(keywords) {
      this.searchKeywords = keywords;
    },
  },
};
</script>

<template>
  <div class="todoapp-container">
    <div class="top-container">
      <div class="date-title">
        {{ todayDate }}
        <search @search="searchTodo"></search>
      </div>
      <div class="calender-todolist-container">
        <calendar :todayDate="todayDate" @changeDate="changeDate"></calendar>
        <todo-item-list
          :todoItems="filteredTodolist"
          :date="todayDate"
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
  display: flex;
  justify-content: space-between;
}
.calender-todolist-container {
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  gap: 50px;
}
</style>
