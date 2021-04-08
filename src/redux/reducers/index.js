import { combineReducers } from 'redux'
import { TODO_ADD, TODO_DELETE, TODO_TOGGLE, FILTER_CHANGE } from "../types"

var inc = val => inc++

const todos = (state = [], action) => {
   switch(action.type){
      case TODO_ADD:
         return[
            ...state,
            {
               id: new Date().valueOf(),
               cnt: action.payload,
               time: new Date().getDay(),
               active: true
            }
         ]
      case TODO_DELETE:
         var newTodos = []
         for (let i = 0; i < state.length; i++) {
            if(state[i].id != action.payload)
               newTodos.push(state[i])
         }
         return newTodos
      case TODO_TOGGLE:
         var newTodos = []
         state.map((todo, index) => {
            if(todo.id == action.payload)
               newTodos.push({...todo, active: !todo.active})
            else
               newTodos.push(todo)
         })
         return newTodos
   }
   return state
}

const filter = (state="all", action) => {
   switch(action.type){
      case FILTER_CHANGE:
         return action.payload
   }
   return state
}
const rootReducer = combineReducers({
	todos,
   filter
})
 
export default rootReducer