import {Component} from 'react'
import Barchart from "./Barchart"

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return ( 
         <header>
            <div className="container">
               <div className="wrap_header">
                  <div className="branch">Todos</div>
                  <Barchart />
                  <span>Import JSON file: <input type="file"/></span>
               </div>
            </div>
         </header>
      )
   }
}

export default Header;