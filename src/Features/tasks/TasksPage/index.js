import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {
  return (
    <>
      <Header title="Lista Zadań" />

      <Section
        title="Dodaj nowe zadanie"
        exampleTasks={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section title="Wyszukaj" body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
}

export default TasksPage;
