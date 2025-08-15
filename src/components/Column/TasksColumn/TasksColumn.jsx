import { useSelector } from "react-redux";
import { TaskCard } from "../../TaskCard/TaskCard";
import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeadBar";
import { AddTaskButton, Column, TasksList } from "./TasksColumnStyled";
import { AddTaskModal } from "../../Modal/AddTaskModal";
import { useEffect, useState } from "react";

export const TasksColumn = ({ status }) => {
  const tasks = useSelector((state) => state.tasks);
  const [isShow, setIsShow] = useState(false);
  useEffect(()=> {
    console.log("hello")
    console.log(tasks)
  },[tasks])
  
      const onShowModal = () => {
          setIsShow(!isShow);
      }
  //  const noTasks = !tasks || !tasks.length;

  //  const tasksLength = tasks?.length || 0;

  const getStageByStatus = (status) => {
    switch (status) {
      case "To do":
        return "toDo";
      case "In progress":
        return "inProgress";
      default:
        return "Done";
    }
  };
  console.log(tasks)

  const filteredTasks = tasks?.filter(
    (task) => 
        task.state === getStageByStatus(status)
    
  );
   const noTasks = !filteredTasks || !filteredTasks.length;

  return (
    <Column>
      <ColumnHeadBar status={status}></ColumnHeadBar>
      <TasksList>
        
         {filteredTasks?.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
        {status === "To do" &&
            <AddTaskButton type="button" onClick={onShowModal}>Add task +</AddTaskButton>
        }
        {isShow && (
          <AddTaskModal onActive={onShowModal} 
              option="Add"
              status={status}
            />
        )}
      </TasksList>
    </Column>
  );
};
