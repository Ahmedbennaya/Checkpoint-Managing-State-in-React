import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To-Do List</h1>
          <TaskForm />
          <TaskList />
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </Provider>
  );
};

export default App;
