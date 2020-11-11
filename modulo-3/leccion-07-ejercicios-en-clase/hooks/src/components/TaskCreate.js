import React, { useState } from "react";
import PropTypes from "prop-types";

const TaskCreate = (props) => {
  return (
    <section classname="new__fill">
      <input classname="new__fill--subject" type="text" name="subject" id="subject" value="" />
      <input classname="new__fill--dueTo" type="text" name="date" id="date" value="" />
      <div>
        <button classname="new__fill--button">Añadir tarea</button>
      </div>
    </section>
  );
};

export default TaskCreate;
