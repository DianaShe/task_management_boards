import { useState } from "react";
import { TaskCardContainer, TaskCardText, TaskCardTitle } from "./TaskCard.styled";

export const TaskCard = ({task}) => {
    const {title, description} = task;

    return (
        <TaskCardContainer >
            <TaskCardTitle>{title}</TaskCardTitle>
            <TaskCardText>{description}</TaskCardText>
        </TaskCardContainer>
    )
}