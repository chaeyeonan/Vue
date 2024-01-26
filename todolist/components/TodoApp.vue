<script>
import TodoCreater from "./TodoCreater.vue";
import TodoItemList from "./TodoItemList.vue";
import Calendar from "./Calendar.vue";
import Search from "./Search.vue";

export default {
  components: {
    TodoCreater,
    TodoItemList,
    Calendar,
    Search,
  },
  data() {
    return {
      searchKeywords: "",
    };
  },
  computed: {
    // 검색 및 날짜별 필터링을 모두 고려하는 새로운 computed 속성
    filteredTodolist() {
      if (this.searchKeywords)
        return this.$store.getters["todoApp/filteredListByKeywords"](
          this.searchKeywords
        );

      return this.$store.getters["todoApp/filteredListByDate"];
    },
    todayDate() {
      return this.$store.state.todoApp.todayDate;
    },
  },
  methods: {
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
        <calendar :todayDate="todayDate"></calendar>
        <todo-item-list
          :todoItems="filteredTodolist"
          :date="todayDate"
          ref="todoItemList"
        />
      </div>
    </div>
    <todo-creater />
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
