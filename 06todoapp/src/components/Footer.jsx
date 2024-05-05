import styles from "./footer.module.css";
export default function Footer({ Todos }) {
  return (
    <div className={styles.count}>
      <h1>Total Todos:{Todos.length}</h1>{" "}
      <h1>Items Incomplete:{Todos.filter((item) => !item.isdone).length}</h1>
    </div>
  );
}
