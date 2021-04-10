import { combineReducers } from 'redux'
import { TODO_ADD, TODO_ADD_INIT, TODO_DELETE, TODO_TOGGLE, FILTER_CHANGE, TODO_IMPORT, TODO_LOAD } from "../types"
import * as localforage from "localforage"

const saveToDB = todo => {
   localforage.setItem(todo.id, todo)
}
const initFromDB = () => {
   var res = []
   localforage.keys().then(keys => {
      keys.map(key => {
         localforage.getItem(key).then(value => {
            // callback(value)
            res.push(value.cnt)
         })
      })
   })
   return res
}

const todos = (state = [], action) => {
   switch(action.type){
      case TODO_ADD:
         const todo = {
            id: new Date().valueOf(),
            cnt: action.payload,
            time: new Date().getDay(),
            active: true
         }
         saveToDB(todo)
         return[
            ...state,
            todo
         ]
      case TODO_ADD_INIT:
         return[
            ...state,
            action.payload
         ]
      case TODO_DELETE:
         var newTodos = []
         for (let i = 0; i < state.length; i++) {
            if(state[i].id != action.payload)
               newTodos.push(state[i])
         }
         localforage.removeItem(action.payload).then(item => {
            console.log('deleted')
         })
         return newTodos
      case TODO_TOGGLE:
         var newTodos = []
         let flag = false
         state.map((todo, index) => {
            if(todo.id == action.payload){
               newTodos.push({...todo, active: !todo.active})
               flag = !todo.active
            }
            else
               newTodos.push(todo)
         })
         localforage.getItem(action.payload).then(item => {
            item.active = !item.active
            localforage.setItem(action.payload, item)
         })
         return newTodos
      case TODO_IMPORT:
         action.payload.map(todo => {
            localforage.setItem(todo.id, todo)
         })
         return [
            ...state,
            ...action.payload
         ]
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