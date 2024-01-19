<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      update: false,
      task: "", // 일단 빈 문자열로 초기화
    };
  },
  created() {
    this.task = this.todo.task; // 컴포넌트가 생성될 때 task를 설정
  },
  methods: {
    changeUpdateTF() {
      this.update = !this.update;
    },
    updateTask() {
      this.update = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="left">
      <input class="checkbox" type="checkbox" v-model="todo.done" />
      <input
        class="updateInputbox"
        v-if="update"
        type="text"
        v-model="task"
        @keydown.enter="
          updateTask();
          $emit('update', todo.id, task);
        "
      />
      <div v-else class="task">{{ todo.task }}</div>
    </div>

    <div class="button-container">
      <div
        class="button"
        :style="{ '--background-color': '#D8D8D8' }"
        @click="changeUpdateTF"
      >
        {{ update ? "완료" : "수정" }}
      </div>
      <div
        class="button"
        :style="{ '--background-color': '#F6CEE3' }"
        @click="$emit('delete', todo.id)"
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
  height: fit-content;
}
.left {
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
  width: calc(100% - 134px);
}
.checkbox {
  width: 25px;
  height: 25px;
}
.updateInputbox {
  border: none;
  border-bottom: 1px solid blue;
  height: 25px;
  font-size: 18px;
  outline: none;
  color: gray;
}
.task {
  width: calc(100% - 50px);
}
.button-container {
  display: flex;
  width: 124px;
}
.button {
  background: var(--background-color);
  padding: 10px;
  border-radius: 10px;
  margin: 0 5px;
  font-weight: bold;
}
</style>
