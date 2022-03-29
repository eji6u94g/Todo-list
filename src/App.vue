<template>
  <div @click="closeModal" class="container">
    <Navbar />

    <Suspense>
      <template #default>
        <TodoItemsContainer />
      </template>

      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Modal />
      </template>

      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TodoItemsContainer from "./components/TodoItemsContainer.vue";
import Modal from "./components/Modal.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: { Navbar, Modal, TodoItemsContainer },
  setup() {
    const store = useStore();
    store.dispatch("fetchTodoItems");

    const closeModal = (e) => {
      if (
        !modal.contains(e.target) &&
        e.target.tagName !== "P" &&
        store.state.isModalShow
      ) {
        store.commit("closeModal");
      }
    };

    return { closeModal };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0 0;
  height: 100vh;
}
h1 {
  text-align: center;
}
.container {
  display: flex;
  flex-direction: row;
}
</style>
