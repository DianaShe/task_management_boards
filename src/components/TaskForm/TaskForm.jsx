import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/actions";
import { Form, FormButton, Input } from "./TaskForm.styled";

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
    console.log (e.target, e.currentTarget)
    e.stopPropagation();
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
      <Input
        type="text"
        name="title"
        autoFocus
        placeholder="Add title..."
        value={formValues.title}
        onChange={handleChange}
      ></Input>
      <Input
        type="text"
        name="description"
        autoFocus
        placeholder="Add description..."
        value={formValues.description}
        onChange={handleChange}
      ></Input>
      <FormButton type="submit">{option} task</FormButton>
    </Form>
  );
};
