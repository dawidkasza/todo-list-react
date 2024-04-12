import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./Features/tasks/TasksPage";
import TaskPage from "./Features/tasks/TaskPage";
import AuthorPage from "./Features/author/AuthorPage";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);
export default App;
