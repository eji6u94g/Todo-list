import { apiHelper } from "../utils/helpers";

export default {
  getTodos() {
    return apiHelper.get('')
  },
  getTodo({ id }) {
    return apiHelper.get(`/${id}`)
  },
  patchTodo({ id, payLoad }) {
    return apiHelper.patch(`/${id}`, payLoad)
  },
  createTodo({ payLoad }) {
    return apiHelper.post('', payLoad)
  },
  deleteTodo({ id }) {
    return apiHelper.delete(`/${id}`)
  }
}