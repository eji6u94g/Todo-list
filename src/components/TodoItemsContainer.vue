<template>
  <div class="to-do-items-container d-flex flex-column">
    <h1>To do List</h1>
    <main>
      <h2>to-do-items-title</h2>

      <div class="to-do-items">
        <TodoItem @handleToDoItemClicked="handleToDoItemClicked" />
      </div>
    </main>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoItemsContainer",
  components: { TodoItem },
  emits: ["afterToDoItemClicked"],
  setup(props, { emit }) {
    const handleToDoItemClicked = () => {
      emit("afterToDoItemClicked");
    };

    return { handleToDoItemClicked };
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