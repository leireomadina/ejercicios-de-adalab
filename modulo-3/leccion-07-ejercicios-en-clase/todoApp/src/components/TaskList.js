import React from "react";
import TaskDetail from "./TaskDetail";

function TaskList(props) {
  const htmlList = props.list.map((eachTask, i) => (
    <li key={i} classname="list__item">
      <TaskDetail subject={eachTask.subject} date={eachTask.data} />
    </li>
  ));

  return (
    <ul classname="list">
      <li classname="list__item">{htmlList}</li>
    </ul>
  );
}

export default TaskList;
