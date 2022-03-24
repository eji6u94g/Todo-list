<template>
  <div class="container">
    <Navbar />

    <Suspense>
      <template #default>
        <TodoItemsContainer @afterToDoItemClicked="afterToDoItemClicked" />
      </template>

      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Modal :isModalShow="isModalShow" />
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
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: { Navbar, Modal, TodoItemsContainer },
  setup() {
    const store = useStore();
    store.dispatch("fetchTodoItems");

    const isModalShow = ref(false);

    const afterToDoItemClicked = (id) => {
      isModalShow.value = !isModalShow.value;
    };

    return {
      isModalShow,
      afterToDoItemClicked,
    };
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
