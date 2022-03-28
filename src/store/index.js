import { createStore } from "vuex";
import todoAPI from "../apis/todo-items"
import { useToast } from "vue-toastification";

const toast = useToast()

const store = createStore({
  state: {
    todoItems: [],
    focusedTodoItem: {},
    isModalShow: false,
    filter: '',
    searchKeyword: ''
  },
  getters: {
    filterTodoItems(state) {
      if (state.filter === 'all' || state.filter === '') {
        return state.todoItems
      } else {
        return state.todoItems.filter(todoItem => todoItem[state.filter])
      }
    },
    searchTodoItems(state) {
      getters.filterTodoItems
    }
  },
  mutations: {
    setTodoItems(state, payLoad) {
      state.todoItems = payLoad;
    },
    setFocusedTodoItem(state, payLoad) {
      state.focusedTodoItem = payLoad
    },
    toggleIsModalShow(state) {
      state.isModalShow = !state.isModalShow
    },
    setFilter(state, keyword) {
      state.filter = keyword
    }
  },
  actions: {
    fetchTodoItems: async ({ commit }) => {
      try {
        const { data, statusText } = await todoAPI.getTodos();

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        commit('setTodoItems', data)
      } catch (error) {
        toast.error("沒辦法讀取Todo List, 請稍後再試", { timeout: 3000 })
        console.log(error);
      }
    },
    fetchFocusedTodoItem: async ({ commit }, id) => {
      try {
        const { data, statusText } = await todoAPI.getTodo({ id });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        commit('setFocusedTodoItem', data)
      } catch (error) {
        toast.error("沒辦法讀取Todo item, 請稍後再試", { timeout: 3000 })
        console.log(error);
      }
    },
    toggleState: async ({ dispatch }, { id, property, value }) => {
      try {
        let payLoad = {}

        if (property === 'dueDate') {
          payLoad = { [property]: value };
        } else {
          payLoad = { [property]: !value };
        }
        const { statusText } = await todoAPI.patchTodo({
          id, payLoad
        })

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        dispatch('fetchFocusedTodoItem', id)
        dispatch('fetchTodoItems')

        if (property === "dueDate") toast.success('到期日成功儲存!')

      } catch (error) {
        if (property === "dueDate") toast.error("發生錯誤, 請稍後再試", { timeout: 3000 })
        console.log(error);
      }
    },
    createTodoItem: async ({ dispatch }, payLoad) => {
      try {
        const { statusText } = await todoAPI.createTodo({ payLoad })

        if (statusText !== "Created") {
          throw new Error(statusText);
        }

        dispatch('fetchTodoItems')

      } catch (error) {
        toast.error("發生錯誤, 無法新增Todo, 請稍後再試", { timeout: 3000 })
        console.log(error);
      }
    }
  }
})

export default store