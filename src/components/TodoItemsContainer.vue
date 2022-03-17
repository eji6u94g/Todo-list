<template>
  <div class="to-do-items-container d-flex flex-column">
    <h1>To do List</h1>

    <main>
      <h2>to-do-items-title</h2>

      <div @click="handleToDoItemClickedOnContainer" class="to-do-items">
        <TodoItem
          v-for="todoItem in todoItems.value"
          :key="todoItem.id"
          :todoItem="todoItem"
        />
      </div>
    </main>
  </div>
</template>



<script>
import { onMounted, reactive, ref } from "vue";
import TodoItem from "./TodoItem";
import todoAPI from "../apis/todo-items";

export default {
  name: "TodoItemsContainer",
  components: { TodoItem },
  emits: ["afterToDoItemClicked"],
  setup(props, { emit }) {
    const handleToDoItemClickedOnContainer = (e) => {
      if (e.target.tagName === "P") {
        emit("afterToDoItemClicked", e.target.id);
      }
    };

    let todoItems = reactive({ value: null });
    let isLoading = ref(true);

    onMounted(async () => {
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
    });

    return { handleToDoItemClickedOnContainer, todoItems, isLoading };
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