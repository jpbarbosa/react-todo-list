import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import '../assets/app.css';
import sampleTasks from '../data/tasks';

const App = () => {
  const [tasks, setTasks] = useState(sampleTasks);

  const createTask = newTask => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = task => {
    setTasks([...tasks.filter(t => t !== task)]);
  };

  const editTask = (oldTask, newTask) => {
    const taskIndex = tasks.indexOf(oldTask);
    setTasks([
      ...tasks.slice(0, taskIndex),
      newTask,
      ...tasks.slice(taskIndex + 1)
    ]);
  };

  return (
    <div>
      <h1>React Todo List</h1>
      <TaskList tasks={tasks} editTask={editTask} removeTask={removeTask} />
      <div className="new-task">
        <div>New Task:</div>
        <TaskForm tasks={tasks} currentTask="" handleAction={createTask} />
      </div>
    </div>
  );
};

export default App;
