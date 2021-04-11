import React, { Component } from 'react'
import { connect } from "react-redux"
import { addTodo, changeFilter } from "../redux/actions"

class Panel extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
      this.inputRef = React.createRef()
   }
   addTodo(e){
      const value = this.inputRef.value
      if(value.length < 3){
         alert("Enter furher value todo")
      }
      else{
         this.props.addTodo(value)
      }
   }
   addTodoEnter(e){
      if(e.code == "Enter"){
         const value = this.inputRef.value
         if(value.length < 3){
            alert("Enter furher value todo")
         }
         else{
            this.props.addTodo(value)
         }
      }
   }
   render() { 
      return ( 
         <div className={`Panel ${this.props.theme}`}>
            <input type="text" className="inputTodo" placeholder="Type text here..." ref={input => this.inputRef = input} onKeyPress={e => this.addTodoEnter(e)}/>
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
   filter: state.filter,
   theme: state.app.theme
})
export default connect(mapStateToProps, mapDispatchToProps)(Panel);