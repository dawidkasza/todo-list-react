import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, StyleButton } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
  fetchExampleTasks,
} from "../../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
      <StyleButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </StyleButton>
      {!areTasksEmpty && (
        <>
          <StyleButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </StyleButton>
          <StyleButton
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
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
