import React from 'react';

const Todo = (props) => {
   return (
      <li className={props.active ? "Todo" : "Todo noactive"}>
         <input className="checkbox" checked={!props.active ? "checked" : ""} type="checkbox" onClick={e => props.eventToggle(props.id)}/>
         <span className="content" onClick={e => props.eventToggle(props.id)}>{props.cnt}</span>
         <span className="close" onClick={e => props.eventDelete(props.id)}>X</span>
      </li>
   )
}
 
export default Todo;