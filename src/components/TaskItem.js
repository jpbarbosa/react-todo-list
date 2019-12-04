import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskItem = ({ tasks, task, editTask, removeTask }) => {
  const [editMode, setEditMode] = useState(false);

  const editAction = (oldTask, newTask) => {
    editTask(oldTask, newTask);
    setEditMode(false);
  };

  return (
    <li>
      <button className="remove" onClick={() => removeTask(task)}>
        X
      </button>
      {editMode ? (
        <TaskForm tasks={tasks} currentTask={task} handleAction={editAction} />
      ) : (
        <div onClick={() => setEditMode(true)}>{task}</div>
      )}
    </li>
  );
};

export default TaskItem;
