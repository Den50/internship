import React, { Component } from 'react'
import { connect } from "react-redux"
import { addTodo, deleteTodo, toggleTodo, changeFilter } from "../redux/actions"

class Panel extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
      this.inputRef = React.createRef()
   }
   addTodo(e){
      this.props.addTodo(this.inputRef.value)
   }
   addTodoEnter(e){
      if(e.code == "Enter")
         this.props.addTodo(this.inputRef.value)
   }
   render() { 
      return ( 
         <div className="Panel">
            <input type="text" placeholder="Type text here..." ref={input => this.inputRef = input} onKeyPress={e => this.addTodoEnter(e)}/>
            <button className="addButton" onClick={e => this.addTodo(e)}>Add</button>
            <div className="chooseFilter">
               <button onClick={e => this.props.changeFilter("all")} className={this.props.filter == "all"? "allButton active" : "allButton"}>All</button>
               <button onClick={e => this.props.changeFilter("active")} className={this.props.filter == "active"? "activedButton active" : "activedButton"}>Active</button>
               <button onClick={e => this.props.changeFilter("checked")} className={this.props.filter == "checked"? "checkedButton active" : "checkedButton"}>Checked</button>
            </div>
         </div>
      )
   }
}


const mapDispatchToProps = dispatch => ({
   addTodo: value => dispatch(addTodo(value)),
   changeFilter: filter => dispatch(changeFilter(filter))
})

const mapStateToProps = state => ({
   filter: state.filter
})
export default connect(mapStateToProps, mapDispatchToProps)(Panel);