<template>
  <div class="to-do-items-container d-flex flex-column justify-content-between">
    <main>
      <h1>To do List</h1>
      <div @click="handleToDoItemClickedOnContainer">
        <TodoItem
          v-for="todoItem in $store.getters.filterTodoItems"
          :key="todoItem.id"
          :todoItem="todoItem"
        />
      </div>
    </main>
    <CreateTodoItem />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import CreateTodoItem from "./CreateTodoItem.vue";
import { useStore } from "vuex";

export default {
  name: "TodoItemsContainer",
  components: { TodoItem, CreateTodoItem },
  emits: ["afterToDoItemClicked"],
  setup(props) {
    const store = useStore();
    const handleToDoItemClickedOnContainer = (e) => {
      if (e.target.tagName === "P") {
        if (!store.state.isModalShow) {
          store.dispatch("fetchFocusedTodoItem", e.target.id);
          store.commit("toggleIsModalShow");
        } else {
          store.dispatch("fetchFocusedTodoItem", e.target.id);
        }
      }
    };

    return { props, handleToDoItemClickedOnContainer };
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