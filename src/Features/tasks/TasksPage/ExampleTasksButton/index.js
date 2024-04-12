import { useDispatch, useSelector } from "react-redux";
import { ButtonsContainer, StyleButton } from "../Buttons/styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

export default () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoading);

  return (
    <ButtonsContainer>
      <StyleButton
        disabled={!status}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        {status ? "Pobierz przykładowe zadania" : "Ładowanie..."}
      </StyleButton>
    </ButtonsContainer>
  );
};
