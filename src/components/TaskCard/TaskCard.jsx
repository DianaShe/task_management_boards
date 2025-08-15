import { useState } from "react";
import { TaskCardContainer, TaskCardText, TaskCardTitle } from "./TaskCard.styled";
import { AddTaskModal } from "../Modal/AddTaskModal";

export const TaskCard = ({task}) => {
    const {title, description, id, status} = task;
    const [isShow, setIsShow] = useState(false);
  
      const onShowModal = (e) => {
        // console.log(e.target, e.currentTarget)
        // if (e.target !== e.currentTarget) {
        //     return;
        // }
        
        setIsShow(!isShow); 
      }

    return (
        <TaskCardContainer onClick={onShowModal}>
            <TaskCardTitle>{title}</TaskCardTitle>
            <TaskCardText>{description}</TaskCardText>
            {isShow && (
                      <AddTaskModal onActive={onShowModal} 
                          option="Edit"
                          status={status}
                          id={id}
                          task={task}
                        />
                    )}
        </TaskCardContainer>
        
    )
}