import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, StyleButton } from "./styled";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
} from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    <ButtonsContainer>
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
