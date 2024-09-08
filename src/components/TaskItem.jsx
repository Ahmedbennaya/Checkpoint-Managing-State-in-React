import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, doneTodo, editTodo, updateTodoHandler, counterAdd } from '../todoSlice';
import { toast } from 'react-hot-toast';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(task.task);

  const handleToggleComplete = () => {
    dispatch(doneTodo(task.id));
    toast(task.done ? 'Task marked as incomplete!' : 'Task marked as completed!');
  };

  const handleDelete = () => {
    dispatch(deleteTodo(task.id));
    toast.error('Task deleted successfully!');
  };

  const handleEdit = () => {
    dispatch(editTodo(task.id));
  };

  const handleSave = () => {
    if (!taskName) {
      toast.error('Please provide a task name');
      return;
    }
    dispatch(updateTodoHandler({ id: task.id, task: taskName }));
    dispatch(counterAdd(task.id));
    toast.success('Task updated successfully!');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-2 hover:shadow-lg transition duration-200">
      {task.isEdited ? (
        <div className="flex-1">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full mb-2"
          />
          <button onClick={handleSave} className="bg-green-500 text-white py-1 px-3 rounded mr-2">
            Save
          </button>
          <button onClick={handleEdit} className="bg-red-500 text-white py-1 px-3 rounded">
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className={`flex-1 ${task.done ? 'line-through text-gray-500' : ''}`}>
            <h3 className="font-semibold text-lg">{task.task}</h3>
            <p className="text-sm">Created on: {task.createdAt}</p>
          </div>
          <div className="flex space-x-2">
            <button onClick={handleToggleComplete} className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-400">
              {task.done ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleEdit} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-400">
              Edit
            </button>
            <button onClick={handleDelete} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-400">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
