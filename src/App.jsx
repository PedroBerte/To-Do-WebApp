import React, { useState } from "react";
import "./App.css";
import AdicionaTask from "./components/AdicionaTask/AdicionaTask";
import HorizontalMenu from "./components/HorizontalMenu/HorizontalMenu";
import Tasks from "./components/Tasks/Tasks";
import VerticalMenu from "./components/VerticalMenu/VerticalMenu";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (TaskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.random(10),
        name: TaskTitle,
        isCompleted: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  };

  var dt = new Date();
  var Hour = dt.getHours();
  var WeekNumber = dt.getDay();
  var Day = dt.getDate();
  var Year = dt.getFullYear();
  var Status;
  var WeekName;
  const Months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let Month = Months[dt.getMonth()];

  const SetWelcomeTitle = () => {
    if (Hour >= 6 && Hour < 12) {
      Status = "Bom Dia!";
    } else if (Hour >= 12 && Hour <= 18) {
      Status = "Boa Tarde!";
    } else {
      Status = "Boa Noite!";
    }
    return Status;
  };

  const SetWelcomeSubtitle = () => {
    switch (WeekNumber) {
      case 0:
        WeekName = "Domingo";
        break;
      case 1:
        WeekName = "Segunda-Feira";
        break;
      case 2:
        WeekName = "Terça-Feira";
        break;
      case 3:
        WeekName = "Quarta-Feira";
        break;
      case 4:
        WeekName = "Quinta-Feira";
        break;
      case 5:
        WeekName = "Sexta-Feira";
        break;
      case 6:
        WeekName = "Sábado";
        break;
      default:
        return;
    }
    return `${WeekName}, ${Day} de ${Month} de ${Year}`;
  };

  return (
    <div className="App">
      <div className="app-body">
        <VerticalMenu />
        <div className="right-side-div">
          <HorizontalMenu />
          <div className="welcome-div">
            <h2 className="welcome-title">{SetWelcomeTitle()}</h2>
            <h3>{SetWelcomeSubtitle()}</h3>
          </div>
          <div className="div-tasks-app">
            <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} />
          </div>
          <AdicionaTask tasks={tasks} handleAddTask={handleAddTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
