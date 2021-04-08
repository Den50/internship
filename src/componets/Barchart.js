import React, { Component } from 'react';
import { ProgressBar } from "react-bootstrap"
import { connect } from "react-redux"
 

class Barchart extends Component {
   constructor(props) {
      super(props);
      this.state = { 
			dropdown: false,
			wdays: [],
			globalProcents: 0
      }
      // props -> [{wday: "Mon", value: 50}, {wday: "Wen", value: 44}...]
      
   }
	calc(){
		const todos = this.props.todos
		var countActiveGLobal = 0
		var countCheckedGLobal = 0
		var res = [
			{wday: "Пн", countActive: 0, countChecked: 0, procents: 0},
			{wday: "Вт", countActive: 0, countChecked: 0, procents: 0},
			{wday: "Ср", countActive: 0, countChecked: 0, procents: 0},
			{wday: "Чт", countActive: 0, countChecked: 0, procents: 0},
			{wday: "Пт", countActive: 0, countChecked: 0, procents: 0},
			{wday: "Сб", countActive: 0, countChecked: 0, procents: 0},
			{wday: "Вс", countActive: 0, countChecked: 0, procents: 0}
		]
		todos.map((todo, index) => {
			if(todo.active){
				countActiveGLobal++
				res[todo.time-1].countActive++
			}
			else{
				countCheckedGLobal++
				res[todo.time-1].countChecked++
			}
		})
		res.map((wday, index) => {
			res[index].procents = (wday.countChecked / (wday.countChecked + wday.countActive)) * 100 || 0
		})

		return {
			wdays: res,
			globalProcents: Math.round((countCheckedGLobal / (countCheckedGLobal + countActiveGLobal)) * 100)
		}
	}
   render() {
		console.log(this.calc().wdays)
      return ( 
         <div className="Barchart">
            <ProgressBar now={this.calc().globalProcents} label={`${this.calc().globalProcents}%`}/>
            <div className="wdayDropdown">

            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   todos: state.todos
})

export default connect(mapStateToProps, null)(Barchart);