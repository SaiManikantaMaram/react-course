import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styles from "./search.module.css";
export default function Search({ data, setData }) {
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "84e9e4c5eeb441b3bab2edd16642cc9d";
  const [query, setquery] = useState("pasta");

  useEffect(() => {
    async function fetchData() {
      const res1 = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const res2 = await res1.json();
      setData(res2.results);
    }
    fetchData();
  }, [query]);

  return (
    <>
      <div className={styles.seachContainer}>
        <input
          className={styles.modreninput}
          type="text"
          onChange={(e) => setquery(e.target.value)}
          value={query}
          placeholder="Enter Item to Search"
        ></input>
        <ItemList data={data} />
      </div>
    </>
  );
}
