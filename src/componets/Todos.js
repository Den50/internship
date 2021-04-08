import {Component} from 'react'
import Todo from "./Todo"
import { connect } from "react-redux"
import { deleteTodo, toggleTodo } from "../redux/actions"

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
                  eventDelete={id => this.props.deleteTodo(id)} 
                  eventToggle={id => this.props.toggleTodo(id)}
               />)
            else
               return
      }
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
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   deleteTodo: id => dispatch(deleteTodo(id)),
   toggleTodo: id => dispatch(toggleTodo(id))
})
const mapStateToProps = state => ({
   todos: state.todos,
   filter: state.filter
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Todos);