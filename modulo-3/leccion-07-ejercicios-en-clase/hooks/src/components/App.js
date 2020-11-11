import React from "react";
import "../stylesheets/App.scss";
import TaskDetail from "./TaskDetail";
import TaskList from "./TaskList";

function App() {
  const initialData = [
    { subject: "Atender clase Hooks", date: 11 },
    { subject: "Descansar", date: 11 },
    { subject: "Hacer deporte", date: 11 },
  ];

  return (
    <div classnameName="App">
      <main classname="container">
        <h3 classname="app__title">Lista de tareas</h3>
        <TaskList list={initialData} />
        {/* <li classname="list__item">
            <div classname="list__item--details pending">
              <input classname="list__item--check" type="checkbox" name="task" id="task" />
              <label classname="list__item--subject" for="t1">
                Comer
              </label>
              <span classname="list__item--dueTo hurry">10nov</span>
            </div>
          </li>
          <li classname="list__item">
            <div classname="list__item--details pending">
              <input classname="list__item--check" type="checkbox" name="task" id="task" />
              <label classname="list__item--subject" for="t1">
                Estudiar para la ev
              </label>
              <span classname="list__item--dueTo ontime">11nov</span>
            </div>
          </li>
          <li classname="list__item">
            <div classname="list__item--details pending">
              <input classname="list__item--check" type="checkbox" name="task" id="task" />
              <label classname="list__item--subject" for="t1">
                Hacer el vídeo de Kizzy
              </label>
              <span classname="list__item--dueTo ontime">15nov</span>
            </div>
          </li>
        </ul>
        <section classname="new__fill">
          <input classname="new__fill--subject" type="text" name="subject" id="subject" value="" />
          <input classname="new__fill--dueTo" type="text" name="date" id="date" value="" />
          <div>
            <button classname="new__fill--button">Añadir tarea</button>
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default App;
