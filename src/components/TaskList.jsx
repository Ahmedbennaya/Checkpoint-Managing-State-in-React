import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.todos);

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <p className="text-center text-gray-600 mt-4">No tasks available. Add some tasks to get started!</p>
      )}
    </div>
  );
};

export default TaskList;
