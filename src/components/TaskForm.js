import React, { useState } from 'react';

const TaskForm = ({ tasks, currentTask, handleAction }) => {
  const [newTask, setNewTask] = useState(currentTask);
  const [error, setError] = useState(undefined);

  const handleChange = event => {
    setNewTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!newTask) {
      return setError('Task cannot be empty!');
    }
    if (newTask !== currentTask && tasks.find(task => task === newTask)) {
      return setError('Task already exists!');
    }
    if (currentTask) {
      handleAction(currentTask, newTask);
    } else {
      handleAction(newTask);
      setNewTask('');
    }
    setError(undefined);
  };

  return (
    <form onSubmit={handleSubmit} class="task-form">
      {error && <div class="error">{error}</div>}
      <div class="task-field">
        <input
          type="text"
          name="task"
          value={newTask}
          onChange={handleChange}
        />
        <button className="submit">{currentTask ? 'Update' : 'Create'}</button>
      </div>
    </form>
  );
};

export default TaskForm;
