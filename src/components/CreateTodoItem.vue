<template>
  <div class="create-to-do-item d-flex align-items-center">
    <div v-if="isInputFocused" class="create-icon">
      <i class="fa-regular fa-circle fa-2x"></i>
    </div>
    <div v-else class="create-icon">
      <i class="fa-solid fa-plus fa-2x"></i>
    </div>

    <div class="create-input">
      <input
        @focus="createInputIsFocused"
        @blur="createInputIsFocusedOut"
        @keyup.enter="createTodoItem"
        v-model="inputValue"
        type="text"
        placeholder="請輸入Todo事項"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "CreateTodoItem",
  setup() {
    const isInputFocused = ref(false);
    const store = useStore();
    const inputValue = ref();
    const createInputIsFocused = () => {
      isInputFocused.value = true;
    };
    const createInputIsFocusedOut = () => {
      isInputFocused.value = false;
    };
    const createTodoItem = () => {
      if (inputValue.value) {
        const payLoad = {
          id: uuidv4(),
          title: inputValue.value,
          isFinished: false,
          isAddedToToday: false,
          isImportant: false,
          isHavingDueDate: false,
          dueDate: null,
        };
        store.dispatch("createTodoItem", payLoad);
        inputValue.value = "";
      }
      return;
    };

    return {
      createInputIsFocused,
      createInputIsFocusedOut,
      createTodoItem,
      isInputFocused,
      inputValue,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/mixins.scss";

.create-to-do-item {
  background-color: #242426;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  justify-self: flex-end;
  .create-icon {
    @include common-icon();
    height: initial;
    width: initial;
    padding-top: 0;
    margin-right: 1rem;
  }
  .create-input,
  .create-input:focus {
    flex-grow: 1;
    input {
      @include common-input();
    }
  }
}
</style>