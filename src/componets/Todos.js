import {Component} from 'react'
import Todo from "./Todo"
import { connect } from "react-redux"
import { deleteTodo, loadTodos, toggleTodo } from "../redux/actions"

// const fs = require("fs")

class Todos extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   switcher(todo){
      switch(this.props.filter){
         case "all":
            return (<Todo 
               id={todo.id} 
               active={todo.active} 
               cnt={todo.cnt}
               time={todo.time}
               eventDelete={id => this.props.deleteTodo(id)} 
               eventToggle={id => this.props.toggleTodo(id)}
            />)
         case "active":
            console.log('active')
            if(todo.active)
               return (<Todo 
                  id={todo.id} 
                  active={todo.active} 
                  cnt={todo.cnt} 
                  time={todo.time}
                  eventDelete={id => this.props.deleteTodo(id)} 
                  eventToggle={id => this.props.toggleTodo(id)}
               />)
            else
               return
         case "checked":
            if(!todo.active)
               return (<Todo 
                  id={todo.id} 
                  active={todo.active} 
                  cnt={todo.cnt} 
                  time={todo.time}
                  eventDelete={id => this.props.deleteTodo(id)} 
                  eventToggle={id => this.props.toggleTodo(id)}
               />)
            else
               return
      }
   }
   handleSaveToPC(jsonData){
      const fileData = JSON.stringify(jsonData);
      const blob = new Blob([fileData], {type: "text/plain"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'filename.json';
      link.href = url;
      link.click();
    }
   saveJSON(e){
      let data = {
         data: this.props.todos,
         meta:{
            filter: this.props.filter
         }
      }
      this.handleSaveToPC(data)
   }
   render() {
      return ( 
         <div className="Todos">
            <ul>
               {
                  this.props.todos.map((todo, index) => 
                     this.switcher(todo)
                  )
               }
            </ul>
            <p className="exportJSON"><a href="#" onClick={e => this.saveJSON(e)}>Export JSON</a></p>
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   deleteTodo: id => dispatch(deleteTodo(id)),
   toggleTodo: id => dispatch(toggleTodo(id)),
	loadTodos: () => dispatch(loadTodos())
})
const mapStateToProps = state => ({
   todos: state.todos,
   filter: state.filter
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Todos);