import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { removeToDo } from '../actions'

class ToDoList extends React.Component {
	handleRemoveButtonClick = (index) => {
		this.props.removeToDo(index)
	}

	render() {
		return (
			<ol>
				{
					this.props.data.map((ele, index) => {
						return <li key={index} >{ele} <button onClick={() => {
							this.handleRemoveButtonClick(index)
						}}>Remove</button></li>
					})
				}
			</ol>
		)
	}
}

let mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		removeToDo: removeToDo
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(ToDoList)