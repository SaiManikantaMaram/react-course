import styles from "./todoitem.module.css";

export default function Todoitem({ todo, Todos, SetTodos }) {
  function deletetask(todo) {
    SetTodos(Todos.filter((item) => todo.name !== item.name));
  }

  function markasdone(todo) {
    SetTodos(
      Todos.map((item) =>
        todo.name === item.name ? { ...todo, isdone: !todo.isdone } : item
      )
    );
  }

  let marktrough = todo.isdone == true ? styles.completed : "";

  return (
    <div className={styles.displayitem}>
      <span className={marktrough} onClick={() => markasdone(todo)}>
        <h3>{todo.name}</h3>
      </span>

      <span>
        <button
          onClick={() => deletetask(todo)}
          className={styles.modrenbutton}
        >
          x
        </button>
      </span>
    </div>
  );
}
