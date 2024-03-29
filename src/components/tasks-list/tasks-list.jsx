import React from 'react';

import Task from '../task/task';
import Button from '../button';
import TaskForm from '../task-form';

import Locale from '../../locale';
import './tasks-list.scss';

const tasks = [
  { id: '1', title: 'React', completed: true },
  { id: '2', title: 'Props', completed: true },
  { id: '3', title: 'State', completed: false },
  { id: '4', title: 'Lifecycle', completed: false }
];

class TasksList extends React.Component {
  state = { tasks };

  filterActive = () => {
    const activeTasks = this.state.tasks.filter(task => !task.completed);
    this.setState({ tasks: activeTasks });
  };

  toggleCompleted = event => {
    const { tasks } = this.state;
    const { id } = event.target.dataset;

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    this.setState({ tasks: updatedTasks });
  };

  addTask = title => {
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        { id: String(Math.random()), title, completed: false }
      ]
    }));
  };

  render() {
    const locale = Locale.tasksList;
    
    return (
      <div className='tasks-list'>
        <TaskForm addTask={this.addTask} />
        {this.state.tasks.map(({ title, completed, id }) => (
          <Task
            title={title}
            completed={completed}
            toggleCompleted={this.toggleCompleted}
            id={id}
            key={id}
          />
        ))}
        <Button label={locale.buttonLabel} onClick={this.filterActive} />
      </div>
    );
  }
}

export default TasksList;
