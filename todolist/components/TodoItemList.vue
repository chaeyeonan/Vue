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
  },
};
</script>

<template>
  <div class="list-container">
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
  overflow: auto;
}
</style>
