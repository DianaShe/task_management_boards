import { TasksColumn } from "../TasksColumn/TasksColumn";
import { ColumnLayout } from "./ColumnContainer.styled";
import { EmptyButton } from "../../Button/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import { updateBoard } from "../../../redux/operations";

export const ColumnContainer = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks)
  const name = useSelector((state) => state.name)
  const handleClick = () => {
    console.log ({tasks, name})
    dispatch(updateBoard({name, tasks}))
  }
  
  return (
    <>
    <ColumnLayout>
      <TasksColumn status="To do">
      </TasksColumn>
      <TasksColumn status="In progress">
      </TasksColumn>
      <TasksColumn status="Done">
      </TasksColumn>
    </ColumnLayout>
    <EmptyButton onClick={handleClick} type='button'>Save changes</EmptyButton>
    </>
  );
};
