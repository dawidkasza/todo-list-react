import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./Features/tasks/TasksPage";
import TaskPage from "./Features/tasks/TaskPage";
import AuthorPage from "./Features/author/AuthorPage";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/zadania">Zadania</NavLink>
        </li>
        <li>
          <NavLink to="/autor">Autor</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
export default App;
