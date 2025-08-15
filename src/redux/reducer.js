import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, updateTask } from "./actions";
import { fetchBoard } from "./operations";


const initialState = {
  // name: "Anna",
  // tasks: [
  //   { id: 0, title: "data", description: "fill in data", status: "toDo" },
  //   { id: 1, title: "text", description: "write text", status: "toDo" },
  //   {
  //     id: 2,
  //     title: "notify",
  //     description: "make notifications",
  //     status: "toDo",
  //   },
  // ],
};

export const rootReducer = createReducer(initialState, builder => {
  builder
    .addCase(fetchBoard.pending, (state) => {
                state.status = 'loading';
            })
    .addCase(fetchBoard.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tasks = action.payload.data.board.tasks;
                state.name = action.payload.data.board.name;
            })
    .addCase(addTask, (state, action) => {
       state.tasks = [...state.tasks, action.payload];
      })
    .addCase(deleteTask, (state, action) => {return state.tasks.filter(task => task.id !== action.payload)})
    .addCase(updateTask, (state, action) => {
        const update = state.tasks.map(task => {
        if (task.id !== action.payload.id) {
          return task;
        }
        return {
          ...action.payload,
        };
      });
      state.status = 'succeeded';
      state.tasks = update;
    });
});
