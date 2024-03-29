import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as DeleteIcon } from './delete.svg';
import './task.scss';

const Task = props => {
  return (
    <div className='task'>
      <div
        className={`task_title${props.completed ? ' task_title__completed' : ''}`}
        data-id={props.id}
        onClick={props.toggleCompleted}
      >
        {props.title}
      </div>
      <DeleteIcon
        className='task_delete-icon'
      />
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Task;
