<template>
  <div class="container">
    <Navbar />

    <TodoItemsContainer
      @afterToDoItemClicked="afterToDoItemClicked"
    />

    <Modal :isModalShow="isModalShow" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TodoItemsContainer from "./components/TodoItemsContainer.vue";
import Modal from "./components/Modal.vue";
import { ref } from "vue";

export default {
  name: "App",
  components: { Navbar, Modal, TodoItemsContainer },
  setup() {
    let isModalShow = ref(false);

    const afterToDoItemClicked = () => {
      isModalShow.value = !isModalShow.value;
    };

    return { isModalShow, afterToDoItemClicked };
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
