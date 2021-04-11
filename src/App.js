import React, { Component } from 'react'
import Header from "./componets/Header"
import Panel from "./componets/Panel"
import Todos from "./componets/Todos"
import Footer from "./componets/Footer"
import { connect, useDispatch, useSelector } from "react-redux"
import { addTodoInit, changeTheme } from "./redux/actions"
import * as localforage from "localforage"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.light.css'
import './App.dark.css'

class App extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		localforage.keys().then(keys => {
			keys.forEach(key => {
				localforage.getItem(key).then(value => {
					// callback(value)
					if(key != "INTERNSHIP")
						this.props.addTodoInit(value)
				})
			})
		})
		localforage.getItem("INTERNSHIP").then(theme => {
			this.props.changeTheme(theme)
		})
	}
	render(){
		return (
			<div className={`App ${this.props.theme}`}>
				<Header />
				<div className="container" style={{paddingBottom: "90px"}}>
					<Panel />
					<Todos />
				</div>
				<Footer theme={this.props.theme}/>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	addTodoInit: todo => dispatch(addTodoInit(todo)),
	changeTheme: theme => dispatch(changeTheme(theme))
})

const mapStateToProps = state => ({
	theme: state.app.theme
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
