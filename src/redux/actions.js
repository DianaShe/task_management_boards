import {createAction, nanoid} from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", text => {
  return {
    payload: {
      text,
      id: nanoid(),
      status: "toDo",
    },
  };
}
);

export const updateTask = createAction("tasks/updateTask");

export const deleteTask = createAction("tasks/deleteTask")