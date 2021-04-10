import React from 'react';

const Todo = (props) => {
   var wday = [
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб",
      "Вс"
   ]
   return (
      <li className={props.active ? "Todo" : "Todo noactive"}>
         <input className="checkbox" checked={!props.active ? "checked" : ""} type="checkbox" onClick={e => props.eventToggle(props.id)}/>
         <span className="content" onClick={e => props.eventToggle(props.id)}>{props.cnt}</span>
         <span className="close" onClick={e => props.eventDelete(props.id)}>X</span>
         <span className="time">{wday[props.time-1]}</span>
      </li>
   )
}
 
export default Todo;