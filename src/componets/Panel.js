import {Component} from 'react'

class Panel extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return ( 
         <div className="Panel">
            <input type="text" placeholder="Type text here..."/>
            <button className="addButton">Add</button>
            <div className="chooseFilter">
               <button className="activedButton active">Active</button>
               <button className="checkedButton">Checked</button>
            </div>
         </div>
      )
   }
}
 
export default Panel;