import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addToDo } from '../actions'

class ToDoListInputForm extends React.Component {
  state = {
    data: ''
  }

  handleInputChange = (event) => {
    this.setState({
      data: event.target.value
    })
  }

  handleSubmitButtonClick = () => {
    this.props.addToDo(this.state.data)
    this.setState({
      data: ''
    })
  }
  
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={ this.state.data }
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmitButtonClick} >
          Submit Todo
        </button>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToDo: addToDo,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ToDoListInputForm)