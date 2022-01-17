import React from "react";
import "./Tasks.css";
import NotCompletedIcon from "./../../images/not-completed.svg";
import CompletedIcon from "./../../images/completed.svg";
import TrashIcon from "./../../images/trash-icon.svg";

const Tasks = ({ tasks, handleDeleteTask }) => {
  const HandleImgChanger = (task) => {
    console.log(task.isCompleted);
    if (task.isCompleted) {
      task.isCompleted = false;
      document.getElementById(task.id).src = NotCompletedIcon;
    } else {
      task.isCompleted = true;
      document.getElementById(task.id).src = CompletedIcon;
    }
  };

  return (
    <>
      {tasks.map((task) => {
        return (
          <div className="div-task" id={`${task.id}-div`}>
            <div className="div-flex">
              <img
                id={task.id}
                onClick={() => HandleImgChanger(task)}
                width="25px"
                className="img-correct-icon"
                src={NotCompletedIcon}
                alt=""
                type="submit"
              />
              <h5 className="text">{task.name}</h5>
            </div>
            <img
              className="img-trash-icon"
              src={TrashIcon}
              alt=""
              onClick={() => handleDeleteTask(task.id)}
            />
          </div>
        );
      })}
    </>
  );
};
export default Tasks;
