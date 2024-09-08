import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    todos: [
      {
        id: uuidv4(),
        task: "Finish the project report",
        done: false,
        isEdited: false,
        createdAt: new Date().toLocaleDateString(),
        countOfEdit: 0,
      },
      {
        id: uuidv4(),
        task: "Prepare for the client meeting",
        done: false,
        isEdited: false,
        createdAt: new Date().toLocaleDateString(),
        countOfEdit: 0,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    doneTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isEdited: !todo.isEdited } : todo
      );
    },
    updateTodoHandler: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.task, isEdited: false }
          : todo
      );
    },
    counterAdd: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, countOfEdit: todo.countOfEdit + 1 } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, doneTodo, editTodo, updateTodoHandler, counterAdd } = todoSlice.actions;
export default todoSlice.reducer;