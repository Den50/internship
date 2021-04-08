import { TODO_ADD, TODO_DELETE, TODO_TOGGLE, FILTER_CHANGE } from "../types"

export const addTodo = value => ({
   type: TODO_ADD,
   payload: value
})

export const deleteTodo = id => ({
   type: TODO_DELETE,
   payload: id
})

export const toggleTodo = id => ({
   type: TODO_TOGGLE,
   payload: id
})

export const changeFilter = filter => ({
   type: FILTER_CHANGE,
   payload: filter
})