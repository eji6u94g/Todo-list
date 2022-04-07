<template>
  <div
    :class="['modal-container', { 'd-none': !$store.state.isModalShow }]"
    id="modal"
  >
    <TodoItem :todoItem="$store.state.focusedTodoItem" />

    <span class="split-line"></span>

    <div class="d-flex flex-column mb-4 mt-4">
      <button
        @click="
          toggleState(
            $store.state.focusedTodoItem.id,
            'isAddedToToday',
            $store.state.focusedTodoItem.isAddedToToday
          )
        "
        :class="[
          { 'added-to-today': $store.state.focusedTodoItem.isAddedToToday },
        ]"
      >
        <i class="fa-solid fa-sun"></i>{{ isAddedToToday }}
      </button>

      <label for="date"><i class="fa-solid fa-calendar"></i>到期日:</label>
      <input type="date" id="date" v-model="dueDate" />
      <button
        @click.prevent.stop="
          editTodoItem($store.state.focusedTodoItem.id, 'dueDate', dueDate)
        "
        class="save-due-date"
      >
        儲存
      </button>
      <button @click.stop.prevent="toggleIsModalShow" class="save-due-date">
        關閉
      </button>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { useStore } from "vuex";
import { computed, ref, watch } from "@vue/runtime-core";

export default {
  name: "Modal",
  components: { TodoItem },
  setup() {
    const store = useStore();
    const dueDate = ref();
    const modal = document.querySelector("#modal");

    const toggleState = (id, property, value) => {
      store.dispatch("toggleState", { id, property, value });
    };
    const editTodoItem = (id, property, value) => {
      store.dispatch("editTodoItem", { id, property, value });
    };
    const isAddedToToday = computed(() => {
      if (store.state.focusedTodoItem.isAddedToToday) {
        return "已新增到我的一天";
      }
      return "新增到我的一天";
    });
    const toggleIsModalShow = () => {
      store.commit("toggleIsModalShow");
    };

    watch(
      () => store.state.focusedTodoItem,
      (newValue, oldValue) => {
        dueDate.value = store.state.focusedTodoItem.dueDate;
      }
    );

    return {
      toggleState,
      isAddedToToday,
      toggleIsModalShow,
      dueDate,
      modal,
      editTodoItem,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

.modal-container {
  @include navbar-style();
  width: 25vw;
  h3 {
    padding-left: 1rem;
  }
  position: absolute;
  right: 0;
}

button {
  @include common-button();
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    @include hover-effect();
  }
  &.added-to-today {
    color: #6c81f7;
  }
  &.save-due-date {
    text-align: center;
  }
}

label[for="date"] {
  // width: 100%;
  font-size: 0.8rem;
  border: 0;
  background-color: none;
  background: none;
  outline: none;
  color: white;
  text-align: start;
  padding: 0.5rem 1rem;
  svg {
    padding-right: 1rem;
  }
}

input[type="date"] {
  margin: 0.5rem 1rem;
}

span.split-line {
  @include split-line();
}
</style>