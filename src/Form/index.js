import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskTrimmed = newTask.trim();
    if (newTask !== "") {
      addNewTask(newTaskTrimmed);
      setNewTask("");
    }
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTask}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
