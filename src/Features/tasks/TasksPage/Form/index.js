import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyleForm, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTask.trim() === "") {
      return;
    }

    dispatch(
      addTask({
        content: newTask.trim(),
        done: false,
        id: nanoid(),
      })
    );

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
