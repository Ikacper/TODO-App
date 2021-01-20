/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskItem.module.css';
import { DoneIcon, EditIcon, DeleteIcon } from '../../assets/svgIcons';

function TaskItem({
  item, tasks, setTasks,
}) {
  const [edit, setEdit] = useState(false);
  const [complete, setCompleted] = useState(false);
  const [editTask, setEditTask] = useState(item.value);

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEdit(!edit);
    }
  };

  const handleRemove = (id) => {
    const newList = tasks.filter((i) => i.id !== id);

    setTasks(newList);
  };

  function handleChangeComplete() {
    setCompleted(!complete);
    const newArr = [...tasks];
    newArr[item.id].completed = !complete;
    setTasks(newArr);
  }

  const renderTitleInput = (
    <input
      type="text"
      value={editTask}
      onChange={(e) => setEditTask(e.target.value)}
      className={styles.titleItemInput}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  );
  const renderTitle = <div className={styles.titleItemText}>{editTask}</div>;

  return (
    <li className={edit ? styles.taskItemHover : styles.taskItem}>

      <div
        className={complete ? styles.buttonCompleted : styles.button}
        onClick={() => handleChangeComplete()}
      >
        <DoneIcon />
      </div>
      {edit ? renderTitleInput : renderTitle}

      <div className={` ${styles.button}`} onClick={handleEdit}>
        <EditIcon />
      </div>
      <div className={` ${styles.button}`} onClick={() => handleRemove(item.id)}>
        <DeleteIcon />
      </div>

    </li>
  );
}

TaskItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    completed: PropTypes.bool,
  }),
  tasks: PropTypes.arrayOf,
  setTasks: PropTypes.func,
};

export default TaskItem;
