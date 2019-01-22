import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ToDoList from './components/ToDoList';
import ToDoListInputForm from './components/ToDoListInputForm';

const App = (props) => {
  const { data } = props;

  return (
    <div>
      Hello World
      <ToDoList data={data} />
      <ToDoListInputForm />
    </div>
  );
};

App.defaultProps = {
  data: [],
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = state => ({
  data: state.reducerToDoList,
});

export default connect(mapStateToProps)(App);
