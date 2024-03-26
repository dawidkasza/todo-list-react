import "./style.css";

const Tasks = (props) => (
  <ul className="task">
    {props.tasks.map((task) => (
      <li
        className={`task__item ${
          task.done && props.hideDoneTasks ? "task__item--hidden" : ""
        }`}
      >
        <button className=" task__button task__button--toggleDone">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`task__content ${task.done ? "task__item--done" : ""}`}
        >
          {task.content}
        </span>
        <button className=" task__button task__button--remove ">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
