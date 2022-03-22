<template>
  <div class="to-do-items-container d-flex flex-column">
    <h1>To do List</h1>

    <main>
      <div @click="handleToDoItemClickedOnContainer" class="to-do-items">
        <TodoItem
          v-for="todoItem in todoItems"
          :key="todoItem.id"
          :todoItem="todoItem"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import TodoItem from "./TodoItem";
import todoAPI from "../apis/todo-items";

export default {
  name: "TodoItemsContainer",
  components: { TodoItem },
  emits: ["afterToDoItemClicked"],
  async setup(props, { emit }) {
    const handleToDoItemClickedOnContainer = (e) => {
      if (e.target.tagName === "P") {
        emit("afterToDoItemClicked", e.target.id);
      }
    };

    const todoItems = ref({});
    const isLoading = ref(true);

    try {
      const { data, statusText } = await todoAPI.getTodos();

      if (statusText !== "OK") {
        throw new Error(statusText);
      }

      todoItems.value = data;
      isLoading.value = false;
    } catch (error) {
      isLoading.value = true;
      console.log(error);
    }

    return { props, handleToDoItemClickedOnContainer, todoItems, isLoading };
  },
};
</script>

<style lang="scss" scoped>
.to-do-items-container {
  flex-grow: 1;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100vh;
}
</style>