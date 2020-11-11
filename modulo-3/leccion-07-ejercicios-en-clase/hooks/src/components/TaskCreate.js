import React, { useState } from "react";
import PropTypes from "prop-types";

const TaskCreate = (props) => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState(11);

  const changeSubject = (ev) => {
    const inputChanged = ev.currentTarget;
    const newValue = inputChanged.value;

    setSubject(newValue);
  };

  const changeDate = (ev) => {
    const inputChanged = ev.currentTarget;
    const newValue = inputChanged.value;

    setDate(newValue);
  };

  const clickButton = (ev) => {
    props.handleCreate(subject, date);
  };

  return (
    <section classname="new__fill">
      <input
        classname="new__fill--subject"
        type="text"
        name="subject"
        id="subject"
        onChange={changeSubject}
        value={subject}
      />
      <input
        classname="new__fill--dueTo"
        type="text"
        name="date"
        id="date"
        onChange={changeDate}
        value={date}
      />
      <div>
        <button classname="new__fill--button" onClick={clickButton}>
          Añadir tarea
        </button>
      </div>
    </section>
  );
};

export default TaskCreate;
