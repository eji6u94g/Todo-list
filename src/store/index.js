import { createStore } from "vuex";
import todoAPI from "../apis/todo-items"

const store = createStore({
  state: {
    todoItems: [],
    focusedTodoItem: {},
    isModalShow: false
  },
  getters: {},
  mutations: {
    setTodoItems(state, payLoad) {
      state.todoItems = payLoad;
    },
    setFocusedTodoItem(state, payLoad) {
      state.focusedTodoItem = payLoad
    },
    toggleIsModalShow(state) {
      state.isModalShow = !state.isModalShow
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
        const { data, statusText } = await todoAPI.patchTodo({
          id, payLoad
        })

        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        dispatch('fetchFocusedTodoItem', id)
        dispatch('fetchTodoItems')
      } catch (error) {
        console.log(error);
      }
    },
  }
})

export default store