import Todoitem from "./TodoItem";
import styles from "./formitem.module.css";
export default function FormItem({ Todos, SetTodos }) {
  {
    return (
      <div className={styles.modrenformitem}>
        {Todos.map((item) => (
          <Todoitem key={item} item={item} Todos={Todos} SetTodos={SetTodos} />
        ))}
      </div>
    );
  }
}
