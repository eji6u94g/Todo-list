<template>
  <div :class="['modal-container', { 'd-none': !props.isModalShow }]">
    <h3>modal</h3>

    <TodoItem/>

    <span class="split-line"></span>

    <div class="d-flex flex-column mb-4 mt-4">
      <button><i class="fa-solid fa-sun"></i>新增到我的一天</button>
      <button>
        <label for="date"
          ><i class="fa-solid fa-calendar"></i>新增到期日:</label
        >
      </button>
      <input type="date" id="date" />
    </div>

    <div class="d-flex justify-content-center">
      <button>儲存</button>
      <button>取消</button>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Modal",
  components: {
    TodoItem,
  },
  props: {
    isModalShow: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

.modal-container {
  @include navbar-style();
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
}

input[type="date"] {
  margin-left: 1rem;
  margin-right: 1rem;
}

span.split-line {
  @include split-line();
}
</style>