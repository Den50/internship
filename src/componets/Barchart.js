import React, { Component } from 'react';
import { ProgressBar } from "react-bootstrap"
class Barchart extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
      // props -> [{wday: "Mon", value: 50}, {wday: "Wen", value: 44}...]
      
   }
   render() { 
      return ( 
         <div className="Barchart">
            <ProgressBar now={60} label="60%"/>
         </div>
      )
   }
}
 
export default Barchart;