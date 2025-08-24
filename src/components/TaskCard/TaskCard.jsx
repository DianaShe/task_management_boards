import { useState } from "react";
import {
  TaskCardContainer,
  TaskCardText,
  TaskCardTitle,
} from "./TaskCard.styled";
import { AddTaskModal } from "../Modal/AddTaskModal";

export const TaskCard = ({ task }) => {
  const { title, description, id, status } = task;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <TaskCardContainer onClick={toggleModal}>
        <TaskCardTitle>{title}</TaskCardTitle>
        <TaskCardText>{description}</TaskCardText>
      </TaskCardContainer>
      {showModal && (
        <AddTaskModal
          onActive={toggleModal}
          option="Edit"
          status={status}
          id={id}
          task={task}
        />
      )}
    </>
  );
};
