import React, { useState } from 'react';
import styles from './App.module.css';

import TaskInput from './components/TaskInput/TaskInput';
import TaskFilters from './components/TaskFilters/TaskFilters';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  return (
    <div className={styles.wrapper}>
      <TaskInput tasks={tasks} setTasks={setTasks} task={task} setTask={setTask} />
      <TaskFilters tasks={tasks} setTask={setTask} setTasks={setTasks} />
    </div>
  );
}

export default App;
