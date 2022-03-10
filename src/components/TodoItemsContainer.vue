<template>
  <main class="to-do-items-container">
    <h2>to-do-items-title</h2>

    <div class="to-do-items">
      <TodoItem />
    </div>
  </main>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoItemsContainer",
  components: { TodoItem },
};
</script>

<style lang="scss" scoped>
.to-do-items-container {
  flex-grow: 1;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>