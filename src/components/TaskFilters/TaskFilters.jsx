import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskFilters.module.css';
import TaskItem from '../TaskItem/TaskItem';

function TaskFilters({ tasks, setTask, setTasks }) {
  const [filter, setFilter] = useState('All');

  let displayTasks = '';

  if(filter === 'All') {
    displayTasks = tasks.map((item) => <TaskItem key={item.id} item={item} setTask={setTask} tasks={tasks} setTasks={setTasks} />)
  } else if(filter === 'Active') {
    displayTasks = tasks.filter((item) => item.completed === false).map((item) => <TaskItem key={item.id} item={item} setTask={setTask} tasks={tasks} setTasks={setTasks} />)
  } else if(filter === 'Completed') {
    displayTasks = tasks.filter((item) => item.completed).map((item) => <TaskItem key={item.id} item={item} setTask={setTask} tasks={tasks} setTasks={setTasks} />)
  } else {
    displayTasks = ''
  }

  return (
    <>
      <ul className={styles.taskFilters}>
        <li className={styles.filter}>
          <button className={styles.button} type="button" onClick={() => { setFilter('All'); }}> View All </button>
        </li>
        <li className={styles.filter}>
          <button className={styles.button} type="button" onClick={() => { setFilter('Active'); }}> Active </button>
        </li>
        <li className={styles.filter}>
          <button className={styles.button} type="button" onClick={() => { setFilter('Completed'); }}> Completed </button>
        </li>
      </ul>
      <div>
        {displayTasks}
      </div>
    </>
  );
}


TaskFilters.propTypes = {
  tasks: PropTypes.arrayOf,
  setTask: PropTypes.func,
  setTasks: PropTypes.func,
};

export default TaskFilters;
