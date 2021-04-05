import { combineReducers } from 'redux'


const todo = (state = {todos: [], history: []}, action) => {
   return state
}
const rootReducer = combineReducers({
	todo
})
 
export default rootReducer