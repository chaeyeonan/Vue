<script>
import TodoCreater from "./TodoCreater.vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoCreater,
    TodoItem,
  },
};
</script>

<template>
  <div>
    <todo-item />
    <todo-creater />
  </div>
</template>
