import { TODO_ADD, TODO_ADD_INIT, TODO_DELETE, TODO_TOGGLE, FILTER_CHANGE, TODO_IMPORT, TODO_LOAD, APP_CHANGE_THEME } from "../types"

export const addTodo = value => ({
   type: TODO_ADD,
   payload: value
})
export const addTodoInit = value => ({
   type: TODO_ADD_INIT,
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
export const importTodos = data => ({
   type: TODO_IMPORT,
   payload: data
})
export const loadTodos = data => ({
   type: TODO_LOAD,
   payload: data
})
export const changeTheme = theme => ({
   type: APP_CHANGE_THEME,
   payload: theme
})