import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      toast.error('Please provide a task name');
      return;
    }

    const newTask = {
      id: uuidv4(),
      task: taskName,
      done: false,
      isEdited: false,
      createdAt: new Date().toLocaleDateString(),
      countOfEdit: 0,
    };

    dispatch(addTodo(newTask));
    toast.success('Task added successfully!');
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col mb-4">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="p-3 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
