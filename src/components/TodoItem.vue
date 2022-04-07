<template>
  <div class="to-do-item d-flex align-items-center justify-content-between">
    <div :class="['item', { editing: isEditing }]">
      <input
        :id="props.todoItem.id"
        v-model="props.todoItem.isFinished"
        type="checkbox"
        class="toggle"
      />

      <label
        :for="props.todoItem.id"
        @click="
          toggleState(
            props.todoItem.id,
            'isFinished',
            props.todoItem.isFinished
          )
        "
      ></label>

      <p :id="props.todoItem.id">
        {{ props.todoItem.title }}
      </p>
    </div>

    <input
      v-model="todoItemTitle"
      @keyup.enter="doneEdit(props.todoItem.id, 'title', todoItemTitle)"
      @blur="doneEdit(props.todoItem.id, 'title', todoItemTitle)"
      @keyup.esc="cancelEdit"
      :class="[{ editing: isEditing }]"
      type="text"
    />

    <div
      :class="[
        'd-flex',
        'align-items-center',
        'justify-content-between',
        { editing: isEditing },
      ]"
    >
      <div @click="editTodoItem(props.todoItem.title)" class="important-icon">
        <i class="fa-solid fa-pen"></i>
      </div>

      <div @click="deleteTodoItem(props.todoItem.id)" class="important-icon">
        <i class="fa-solid fa-trash-can"></i>
      </div>

      <div
        v-if="props.todoItem.isImportant"
        @click="
          toggleState(
            props.todoItem.id,
            'isImportant',
            props.todoItem.isImportant
          )
        "
        class="important-icon"
      >
        <i class="fa-solid fa-star"></i>
      </div>

      <div
        v-else
        @click="
          toggleState(
            props.todoItem.id,
            'isImportant',
            props.todoItem.isImportant
          )
        "
        class="important-icon"
      >
        <i class="fa-regular fa-star"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "TodoItem",
  props: {
    todoItem: {
      value: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const todoItemTitle = ref();
    const isEditing = ref(false);

    const toggleState = (id, property, value) => {
      store.dispatch("toggleState", { id, property, value });
    };
    const deleteTodoItem = (id) => {
      store.dispatch("deleteTodoItem", id);
    };
    const editTodoItem = (title) => {
      isEditing.value = true;
      todoItemTitle.value = title;
    };
    const doneEdit = (id, property, value) => {
      store.dispatch("editTodoItem", { id, property, value });
      isEditing.value = false;
    };
    const cancelEdit = () => {
      isEditing.value = false;
      todoItemTitle.value = "";
    };

    return {
      props,
      toggleState,
      deleteTodoItem,
      editTodoItem,
      doneEdit,
      cancelEdit,
      todoItemTitle,
      isEditing,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

.to-do-item {
  background-color: #242426;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  margin-top: 0.3rem;
  position: relative;
  div {
    &.item {
      position: relative;
      flex-grow: 1;
    }
    &.editing {
      display: none;
    }
    &.important-icon {
      @include common-icon();
    }
  }
  input[type="checkbox"] {
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10px;
    width: 40px;
    height: 40px;
    margin: auto auto;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    opacity: 0;
  }
  .toggle + label {
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10px;
    width: 40px;
    height: 40px;
    margin: auto auto;
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }
  .toggle:checked + label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E");
  }
  p {
    padding-left: 3rem;
    height: 40px;
    margin: 0 0;
    padding-top: 1rem;
    font-size: 1rem;
  }
  input[type="text"] {
    @include common-input();
    display: none;
    position: absolute;
    z-index: initial;
    padding: 0 0;
    top: 1rem;
    left: 3rem;
    &.editing {
      display: block;
    }
  }
  svg:hover {
    filter: invert(0.3);
  }
  &:hover {
    @include hover-effect();
  }
}
</style>