import {Component} from 'react'
import Barchart from "./Barchart"
import { connect } from "react-redux"
import { importTodos, changeFilter, changeTheme } from "../redux/actions"


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
         self.props.changeFilter(JSON.parse(evt.target.result).meta.filter)
      }
   }
   render() { 
      return ( 
         <header className={this.props.theme}>
            <div className="container">
               <div className="wrap_header">
                  <div className="branch">Todos</div>
                  <Barchart />

                  <div className='group_tools'>
                     <label className="switch">
                        <span className="name_switch">Theme: </span>
                        <input type="checkbox" defaultChecked={this.props.theme == "dark"} onChange={e => this.props.changeTheme((e.target.checked)? "dark": "light")}/>
                        <span className="slider round"></span>
                     </label>

                     <div className="browse-button">
                        <input type="button" value="Import TODOs"/>
                        <input type="file" onChange={e => this.uploadJSON(e)}/>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   importTodos: data => dispatch(importTodos(data)),
   changeFilter: newFilter => dispatch(changeFilter(newFilter)),
   changeTheme: theme => dispatch(changeTheme(theme))
})
const mapStateToProps = state => ({
   theme: state.app.theme
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);