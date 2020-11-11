import React, { useState } from "react";
import "../stylesheets/App.scss";
import TaskCreate from "./TaskCreate";
import TaskDetail from "./TaskDetail";
import TaskList from "./TaskList";

function App() {
  const initialData = [
    { subject: "Atender clase Hooks", date: 11 },
    { subject: "Descansar", date: 11 },
    { subject: "Hacer deporte", date: 12 },
  ];

  const [taskList, setTaskList] = useState(initialData);

  const createNewTask = (newSubject, newDate) => {
    const newtask = {
      subject: newSubject,
      date: newDate,
    };
    //no podemos usar push porque es un state, tenemos que hacerlo con set usando el spread operator para recoger todas las tareas ya existentes
    // taskList.push(newtask);
    setTaskList([...taskList, newtask]);
  };

  return (
    <div classnameName="App">
      <main classname="container">
        <h3 classname="app__title">Lista de tareas</h3>
        <TaskList list={taskList} />
        <TaskCreate handleCreate={createNewTask} />
      </main>
    </div>
  );
}

export default App;
