import { createStore } from 'redux'
import rootReducer from './reducers'

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store