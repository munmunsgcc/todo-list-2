import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { addToDoAction } from '../actions';

class ToDoListInputForm extends React.Component {
  state = {
    data: '',
  };

  handleInputChange = (event) => {
    this.setState({
      data: event.target.value,
    });
  };

  handleSubmitButtonClick = () => {
    const { addToDo } = this.props;
    const { data } = this.state;

    addToDo(data);

    this.setState({
      data: '',
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <input type="text" value={data} onChange={this.handleInputChange} />
        <button type="button" onClick={this.handleSubmitButtonClick}>
          Submit Todo
        </button>
      </div>
    );
  }
}

ToDoListInputForm.defaultProps = {
  addToDo: () => {},
};

ToDoListInputForm.propTypes = {
  addToDo: PropTypes.func,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    addToDo: addToDoAction,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(ToDoListInputForm);
