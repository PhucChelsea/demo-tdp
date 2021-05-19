import * as types from "./type";

export const addTodo = (name, id) => ({
  type: types.ADD_WORK,
  payload: { name, id },
});
export const doneTodo = (id) => ({
  type: types.DONE_WORK,
  payload: { id },
});
export const deleteTodo = (id) => ({
  type: types.DELETE_WORK,
  payload: { id },
});
