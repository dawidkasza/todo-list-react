import { useDispatch, useSelector } from "react-redux";
import { ButtonsContainer, StyleButton } from "../Buttons/styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <ButtonsContainer>
      <StyleButton
        disabled={loading}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </StyleButton>
    </ButtonsContainer>
  );
};
