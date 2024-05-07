import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={item.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{item.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
