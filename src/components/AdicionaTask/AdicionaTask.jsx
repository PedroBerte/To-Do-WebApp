import React, { useState } from "react";
import AddIcon from "./../../images/+.svg";
import "./AdicionaTask.css";

const AdicionaTask = ({ tasks, handleAddTask }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  var isShowed = false;
  var isRolled = false;

  function rollAnimation() {
    if (!isRolled) {
      document.getElementById("add-img").style.animation = "rotation 0.8s";
      isRolled = true;
    } else {
      document.getElementById("add-img").style.animation = "backRotation 0.8s";
      isRolled = false;
    }
  }

  var screenWidth = window.innerWidth;

  function returnScreenWidth() {
    if (screenWidth <= 700) {
      return "100%";
    } else {
      return "300px";
    }
  }

  function showInput() {
    console.log(screenWidth);
    if (!isShowed) {
      isShowed = true;
      rollAnimation(true);
      document.getElementById("add-input").style.width = returnScreenWidth();
    } else {
      isShowed = false;
      rollAnimation(false);
      document.getElementById("add-input").style.width = "0px";
      if (document.getElementById("add-input").value != "") {
        handleAddTask(inputData);
        document.getElementById("add-input").value = "";
      } else {
        document.getElementById("add-input").value = "";
      }
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask(inputData);
    document.getElementById("add-input").style.width = "0px";
    document.getElementById("add-input").value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div>
          <input
            placeholder="Insira a nova Tarefa:"
            onChange={handleInputChange}
            id="add-input"
            className="add-input"
            type="text"
          />
        </div>
        <img
          id="add-img"
          onClick={() => showInput()}
          className="add-img"
          src={AddIcon}
          alt=""
          type="submit"
        />
      </form>
    </>
  );
};

export default AdicionaTask;
