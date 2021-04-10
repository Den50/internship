import Header from "./componets/Header"
import Panel from "./componets/Panel"
import Todos from "./componets/Todos"
import Footer from "./componets/Footer"
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useDispatch } from "react-redux"
import { addTodoInit } from "./redux/actions"
import * as localforage from "localforage"

const App = () => {
	const dispatch = useDispatch()
	
	localforage.keys().then(keys => {
      keys.map(key => {
         localforage.getItem(key).then(value => {
            // callback(value)
            dispatch(addTodoInit(value))
         })
      })
   })
  return (
	<div className="App">
		<Header />
		<div className="container">
			<Panel />
			<Todos />
		</div>
		<Footer />
	</div>
  );
}

export default App
