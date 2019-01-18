import React, { Component } from 'react';
import { connect } from 'react-redux'


import ToDoList from './components/ToDoList'
import ToDoListInputForm from './components/ToDoListInputForm'

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <ToDoList data={this.props.data} />
        <ToDoListInputForm />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.reducerToDoList
  }
}

export default connect(mapStateToProps)(App);
