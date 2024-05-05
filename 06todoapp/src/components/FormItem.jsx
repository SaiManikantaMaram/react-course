import React, { useEffect } from "react";
import Todoitem from "./TodoItem";
import styles from "./formitem.module.css";

export default function FormItem({ Todos, SetTodos }) {
  useEffect(() => {
    // Sort Todos and update state in the effect hook
    SetTodos(Todos.slice().sort((a, b) => Number(a.isdone) - Number(b.isdone)));
  }, [Todos, SetTodos]); // Dependency array to ensure effect runs only when Todos or SetTodos change

  return (
    <div className={styles.modrenformitem}>
      {Todos.map((item) => (
        <Todoitem
          key={item.name}
          todo={item}
          Todos={Todos}
          SetTodos={SetTodos}
        />
      ))}
    </div>
  );
}
