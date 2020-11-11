import React, { useState } from "react";
import PropTypes from "prop-types";

function TaskDetail(props) {
  console.log(props);
  //state para saber si la tarea está completada o pendiente
  const [styleTask, setStyleTask] = useState("pending");
  // Para comprobar si la tarea está pasada de fecha o no
  const styleDate = props.date <= 11 ? "hurry" : "";
  const clickTask = (ev) => {
    console.log("Me han hecho click" + props.subject);
    //incluimos los estilos cuando una tarea está terminada al hacer click sobre ella
    if (styleTask === "done") {
      setStyleTask("pending");
    } else {
      setStyleTask("done");
    }
    //lo mismo pero con un operador ternario
    // setStyleTask(styleTask === "done" ? "pending" : "done");
  };

  return (
    <div classname={"list__item--details " + styleTask}>
      <input
        classname="list__item--check"
        type="checkbox"
        name="task"
        id="task"
        checked=""
        onChange={clickTask}
      />
      <label classname="list__item--subject" for="t1">
        {props.subject}
      </label>
      <span classname={"list__item--dueTo " + styleDate}>{props.date}</span>
    </div>
  );
}

TaskDetail.propTypes = {
  subject: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default TaskDetail;
