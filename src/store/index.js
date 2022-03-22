import { ref, readonly } from "vue"
import todoAPI from "../apis/todo-items"

const isImportant = ref(false)
const todoId = ref('1')
const setTodoId = (id) => {
  todoId.value = id
}
const fetchIsImportant = async (id) => {
  try {
    const res = await todoAPI.getTodo({ id })

    if (res.statusText !== "OK") {
      throw new Error(res.statusText)
    }
    isImportant.value = res.data.isImportant
    console.log(id)
  } catch (error) {
    console.log(error)
  }
}
const toggleIsImportant = () => {
  isImportant.value = !isImportant.value
}

fetchIsImportant(todoId.value)

export default { isImportant: readonly(isImportant), setTodoId, toggleIsImportant }