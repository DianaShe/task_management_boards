import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/actions";
import { AddFormButton, Form, Input } from "./TaskForm.styled";

const INITIAL_STATE = {
  title: "",
  description: "",
};

export const TaskForm = (option, id) => {
  const [state, setState] = useState(INITIAL_STATE);
    const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = form.elements;
    console.log(values);
    if (option === "add") {
      const newTask = {
        ...values,
        status: "toDo",
      };
      dispatch(addTask(newTask));
    }

    if (option === "edit") {
      const updatedTask = {
        ...values,
      };

      dispatch(updateTask({ id, updatedTask }));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        placeholder="Add title..."
        value={state.title}
        onChange={handleChange}
      ></Input>
      <Input
        type="text"
        name="description"
        placeholder="Add description..."
        value={state.description}
        onChange={handleChange}
      ></Input>
      <AddFormButton type="submit">Add task</AddFormButton>
    </Form>
  );
};
