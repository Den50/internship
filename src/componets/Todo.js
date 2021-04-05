import React from 'react';

const Todo = (props) => {
   return (
      <li className="Todo">
         <span className="id">{props.id}</span>
         <input className="checkbox" type="checkbox"/>
         <span className="content">{props.content}</span>
         <span className="close">X</span>
      </li>
   )
}
 
export default Todo;