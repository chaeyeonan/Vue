import Vue from "vue";
import Vuex from "vuex";
import jsonData from "../assets/todoData.json";

Vue.use(Vuex);

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

export const store = new Vuex.Store({
  state: {
    todolist: jsonData.todoData,
    todayDate: formatDate(new Date()),
  },
  mutations: {
    // 선택한 날짜 변경
    CHANGE_DATE(state, date) {
      state.todayDate = formatDate(date);
    },
    // todo 추가
    ADD_TODOITEM(state, task) {
      state.todolist.push({
        id: Math.floor(Math.random() * 10000),
        task: task,
        done: false,
        createdDate: state.todayDate,
      });
    },
    // todo 삭제
    DELETE_TODOITEM(state, id) {
      const index = state.todolist.findIndex((item) => item.id === id);
      if (index !== -1) state.todolist.splice(index, 1);
    },
    // todo 수정
    UPDATE_TODOITEM(state, payload) {
      state.todolist.forEach(
        (todo) => todo.id === payload.id && (todo.task = payload.task)
      );
    },
  },
});
