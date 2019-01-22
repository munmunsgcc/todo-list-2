import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { removeToDoAction } from '../actions';

class ToDoList extends React.Component {
  handleRemoveButtonClick = (index) => {
    const { removeToDo } = this.props;

    removeToDo(index);
  };

  render() {
    const { data } = this.props;

    return (
      <ol>
        {data.map((ele, index) => (
          <li key={shortid.generate()}>
            {ele}
            {' '}
            <button
              type="button"
              onClick={() => {
                this.handleRemoveButtonClick(index);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

ToDoList.defaultProps = {
  removeToDo: () => {},
  data: [],
};

ToDoList.propTypes = {
  removeToDo: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string),
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    removeToDo: removeToDoAction,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(ToDoList);
