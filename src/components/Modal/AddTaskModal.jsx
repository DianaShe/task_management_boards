import { TaskForm } from "../TaskForm/TaskForm"
import { Modal } from "./Modal"

export const AddTaskModal = ({ onActive, ...props}) => {
    return (
        <Modal onEsc={true} onActive={onActive} >
          <TaskForm {...props} />
        </Modal>
    )
}