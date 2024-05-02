import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ Todos, SetTodos }) {
  const [Todo, SetTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    SetTodos([...Todos, Todo]);
    SetTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.modreninput}
          onChange={(e) => SetTodo(e.target.value)}
          type="text"
          value={Todo}
          placeholder="Enter Todo Item"
        ></input>{" "}
        <button className={styles.modrenbutton}>Add</button>
      </div>
    </form>
  );
}
