<template>
  <h1>To do List</h1>
  <div class="container">
    <Navbar />

    <TodoItemsContainer />

    <Modal/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TodoItemsContainer from "./components/TodoItemsContainer.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Navbar, Modal, TodoItemsContainer },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0 0;
}
h1 {
  text-align: center;
}
.container {
  display: flex;
  flex-direction: row;
}
</style>
