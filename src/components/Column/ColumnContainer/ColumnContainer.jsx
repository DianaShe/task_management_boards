import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeadBar";
import { TaskCard } from "../../TaskCard/TaskCard";
import { TasksColumn } from "../TasksColumn/TasksColumn";
import { ColumnLayout } from "./ColumnContainer.styled";

export const ColumnContainer = () => {
  // const status = ["To do", "In progress", "Done"];

  // const getStageByStatus = (status) => {
  //   switch (status) {
  //     case "toDo":
  //       return "To do";
  //     case "inProgress":
  //       return "In progress";
  //     default:
  //       return "Done";
  //   }
  // };

  return (
    <ColumnLayout>
      <TasksColumn status="To do">
      </TasksColumn>
      <TasksColumn status="In progress">
      </TasksColumn>
      <TasksColumn status="Done">
      </TasksColumn>
    </ColumnLayout>
  );
};
