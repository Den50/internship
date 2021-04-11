import React, { Component } from 'react';
import { ProgressBar } from "react-bootstrap"
import { connect } from "react-redux"
 

class Barchart extends Component {
   constructor(props) {
      super(props);
      this.state = { 
			dropdown: false,
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
				res[(todo.time + 6) % 7].countActive++
			}
			else{
				countCheckedGLobal++
				res[(todo.time + 6) % 7].countChecked++
			}
		})
		res.map((wday, index) => {
			res[index].procents = Math.round((wday.countChecked / (wday.countChecked + wday.countActive)) * 100) || 0
		})

		return {
			wdays: res,
			globalProcents: Math.round((countCheckedGLobal / (countCheckedGLobal + countActiveGLobal)) * 100) || 0
		}
	}
   render() {
      return ( 
         <div className={`Barchart ${this.props.theme}`} onClick={e => this.setState({dropdown: !this.state.dropdown})}>
            <ProgressBar now={this.calc().globalProcents} label={`${this.calc().globalProcents}%`}/>
            <div className="wdayDropdown" style={this.state.dropdown? {display: "block"}: {display: "none"}}>
					<h4>Statistics</h4>
					{
						this.calc().wdays.map((wday, index) => 
							<div className="wdayDropdownItem" key={""+index}>
								<span className="wdayDropdownItem_label">{wday.wday}: </span> 
								<ProgressBar now={wday.procents} label={`${wday.procents}%`}/>
							</div>
						)
					}
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   todos: state.todos,
	theme: state.app.theme
})

export default connect(mapStateToProps, null)(Barchart);