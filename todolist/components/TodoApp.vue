<script>
import TodoCreater from "./TodoCreater.vue";
import TodoItemList from "./TodoItemList.vue";

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
    };
  },
};
</script>

<template>
  <div class="todoapp-container">
    <div class="top-container">
      <div class="date">{{ createdDate }}</div>
      <todo-item-list :date="createdDate" />
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
}
.date {
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0;
}
</style>
