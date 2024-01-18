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
  data() {
    return {
      todolist: this.todoItems,
    };
  },
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
      v-for="todos in todolist"
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
