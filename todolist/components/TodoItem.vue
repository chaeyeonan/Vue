<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row left">
      <input type="checkbox" v-model="todo.done" />
      <div>{{ todo.task }}</div>
    </div>

    <div class="row">
      <div class="button" :style="{ '--background-color': '#D8D8D8' }">
        수정
      </div>
      <div
        class="button"
        :style="{ '--background-color': '#F6CEE3' }"
        @click="$emit('deleteId', todo.id)"
      >
        삭제
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid lightblue;
  background: white;
  border-radius: 10px;
  padding: 10px;
}
.row {
  display: flex;
}
.row.left {
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
}
input {
  width: 25px;
  height: 25px;
}
.button {
  background: var(--background-color);
  padding: 10px;
  border-radius: 10px;
  margin: 0 5px;
  font-weight: bold;
}
</style>
