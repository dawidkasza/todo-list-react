import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, StyleButton } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <ButtonsContainer>
      {tasks.length > 0 && (
        <>
          <StyleButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </StyleButton>
          <StyleButton
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            {" "}
            Ukończ wszystkie
          </StyleButton>
        </>
      )}
    </ButtonsContainer>
  );
};

export default Buttons;
