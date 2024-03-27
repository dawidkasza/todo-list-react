import "./style.css";

const onDelete = () => console.log("Klinięto przycist!");

const Tasks = (props) => (
  <ul className="task">
    {props.tasks.map((task) => (
      <li
        className={`task__item ${
          task.done && props.hideDone ? "task__item--hidden" : ""
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
        <button
          className=" task__button task__button--remove "
          onClick={onDelete}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
