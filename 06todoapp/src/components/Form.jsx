import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ Todos, SetTodos }) {
  const [Todo, SetTodo] = useState({ name: "", isdone: false });

  function handleSubmit(e) {
    e.preventDefault();
    SetTodos([...Todos, Todo]);
    SetTodo({ name: "", isdone: false });
  }

  return (
    <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.modreninput}
          onChange={(e) => SetTodo({ name: e.target.value, isdone: false })}
          type="text"
          value={Todo.name}
          placeholder="Enter Todo Item"
        ></input>{" "}
        <button className={styles.modrenbutton}>Add</button>
      </div>
    </form>
  );
}
