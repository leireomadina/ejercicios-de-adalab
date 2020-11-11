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

  return (
    <div classnameName="App">
      <main classname="container">
        <h3 classname="app__title">Lista de tareas</h3>
        <TaskList list={taskList} />
        <TaskCreate />
      </main>
    </div>
  );
}

export default App;
