import { useRef, useState } from "react";
import { StyleForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim() === "") {
      return;
    }

    addNewTask(newTask.trim());
    setNewTask("");
    inputRef.current.focus();
  };

  return (
    <StyleForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTask}
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTask(event.target.value)}
      />
      <Button className="form__button">Dodaj zadanie</Button>
    </StyleForm>
  );
};

export default Form;
