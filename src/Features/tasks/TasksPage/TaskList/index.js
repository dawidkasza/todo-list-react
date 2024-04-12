import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, StyledNavLink } from "./styled";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTaskByQuery,
} from "../../tasksSlice";
import { toTask } from "../../../../routes";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const serachParams = new URLSearchParams(location.search);
  const query = serachParams.get(searchQueryParamName);

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <StyledNavLink to={toTask({ id: task.id })}>
              {task.content}
            </StyledNavLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
