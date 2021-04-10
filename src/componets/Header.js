import {Component} from 'react'
import Barchart from "./Barchart"
import { connect } from "react-redux"
import { importTodos } from "../redux/actions"


class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   uploadJSON(e){
      let file = e.target.files[0];
      const self = this
      
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
         self.props.importTodos(JSON.parse(evt.target.result).data)
      }
   }
   render() { 
      return ( 
         <header>
            <div className="container">
               <div className="wrap_header">
                  <div className="branch">Todos</div>
                  <Barchart />
                  <span>Import JSON file: <input type="file" onChange={e => this.uploadJSON(e)}/></span>
               </div>
            </div>
         </header>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   importTodos: data => dispatch(importTodos(data))
})

export default connect(null, mapDispatchToProps)(Header);