import styles from "./todoitem.module.css";
export default function Todoitem({ item, Todos, SetTodos }) {
  function deletetask(item) {
    SetTodos(Todos.filter((todo) => todo != item));
  }
  return (
    <div className={styles.displayitem}>
      <h3>{item}</h3>
      <span>
        <button
          onClick={() => deletetask(item)}
          className={styles.modrenbutton}
        >
          x
        </button>
      </span>
    </div>
  );
}
