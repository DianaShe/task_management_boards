import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/actions";
import { Form, Input, Label } from "./TaskForm.styled";
import { FilledButton } from "../Button/Button.styled";

const INITIAL_STATE = {
  title: "",
  description: "",
};

export const TaskForm = ({onActive, option, id, task} ) => {
  const [formValues, setFormValues] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    useEffect (() => {
      setFormValues({title: task?.title, description: task?.description})
    }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (option === "Add") {
      const newTask = {
        ...formValues,
        state: "toDo",
      };
      dispatch(addTask(newTask));
    }

    if (option === "Edit") {
      console.log('in edit')
      const updatedTask = {
        ...formValues,
        state: task.state,
        id,
      }
      console.log(updatedTask)
      dispatch(updateTask(updatedTask));
      
    }

    onActive()
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        autoFocus
        placeholder="Add title..."
        value={formValues.title}
        onChange={handleChange}
      ></Input>
      <Label>Details</Label>
      <Input
        type="text"
        name="description"
        id="description"
        placeholder="Add description..."
        value={formValues.description}
        onChange={handleChange}
      ></Input>
      <FilledButton type="submit">{option} task</FilledButton>
    </Form>
  );
};
