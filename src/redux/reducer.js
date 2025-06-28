import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, updateTask } from "./actions";


const initialState = {
  tasks: [
    { id: 0, title: "data", description: "fill in data", status: "toDo" },
    { id: 1, title: "text", description: "write text", status: "toDo" },
    {
      id: 2,
      title: "notify",
      description: "make notifications",
      status: "toDo",
    },
  ],
};

export const rootReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTask, (state, action) => {return [...state, action.payload];})
    .addCase(deleteTask, (state, action) => {return state.filter(task => task.id !== action.payload)})
    .addCase(updateTask, (state, action) => {
        return state.map(task => {
        if (task.id !== action.payload.id) {
          return task;
        }
        return {
          ...task,
          status: action.payload.status,
        };
      });});
});
