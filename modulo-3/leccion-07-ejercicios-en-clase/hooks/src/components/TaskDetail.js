import React from "react";
import PropTypes from "prop-types";

function TaskDetail(props) {
  console.log(props);
  // Para comprobar si la tarea está pasada de fecha o no
  const styleDate = props.date <= 11 ? "hurry" : "";
  const clickTask = (ev) => {};

  return (
    <div classname="list__item--details done">
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
