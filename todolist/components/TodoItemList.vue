<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    date: {
      type: String,
      required: true,
    },
    todoItems: {
      type: Array,
      required: true,
    },
  },
  // props로 받은 todoItems를 data로 한번 더 바인딩 해주면 반응성 반영 안됨 (mount 될 때 갱신)
  // data() {
  //   return {
  //     todolist: this.todoItems,
  //   };
  // },
  methods: {
    deleteData(id) {
      this.$emit("delete", id);
    },
    updateData(id, task) {
      this.$emit("update", id, task);
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.listContainer;
        container.scrollTop = container.scrollHeight;
      });
    },
  },
};
</script>

<template>
  <div class="list-container" ref="listContainer">
    <todo-item
      v-for="todos in todoItems"
      :key="todos.id"
      :todo="todos"
      @delete="deleteData"
      @update="updateData"
    />
  </div>
</template>

<style scoped>
.list-container {
  height: 85%;
  width: 60%;
  overflow: auto;
}
/* 스크롤바 설정*/
.list-container::-webkit-scrollbar {
  /*  스크롤바 막대 너비 설정 */
  width: 6px;
}
/* 스크롤바 막대 설정*/
.list-container::-webkit-scrollbar-thumb {
  /* 스크롤바 막대 높이, 색상 설정    */
  height: 17%;
  background-color: #bdbdbd;
  /* 스크롤바 둥글게 설정    */
  border-radius: 2px;
}
/* 스크롤바 뒷 배경 설정*/
.list-container::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}
</style>
