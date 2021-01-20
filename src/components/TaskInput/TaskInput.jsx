import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskInput.module.css';

function TaskInput({
  tasks, setTasks, task, setTask,
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTasks([...tasks,
        {
          id: tasks.length,
          value: task,
          completed: false,
        }]);
      setTask('');
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <input type="text" className={styles.taskInput} value={task} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setTask(e.target.value)} placeholder="What needs to be done?" />
    </div>
  );
}

TaskInput.propTypes = {
  tasks: PropTypes.arrayOf,
  setTask: PropTypes.func,
  task: PropTypes.string,
  setTasks: PropTypes.func,
};

export default TaskInput;
