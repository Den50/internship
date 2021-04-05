import {Component} from 'react'
import Todo from "./Todo"

class Todos extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
      this.todos = [
         {
            id: 1,
            content: "slkfsldkfs"
         },
         {
            id: 2,
            content: "slkfsldkfdfsdfs"
         },
         {
            id: 3,
            content: "slkfdfsldkfdfsdfs"
         }
      ]
   }
   render() {
      this.todos.map(el => console.log(el))
      return ( 
         <div className="Todos">
            <ul>
            {
               this.todos.map((todo, index) => <Todo id={todo.id} content={todo.content}/>)
            }
            </ul>
         </div>
      )
   }
}
 
export default Todos;