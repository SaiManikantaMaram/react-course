import { useState } from "react";
import Fruitdisplay from "./components/Fruitdisplay";

let fruitList = [
  { name: "Apple", price: 15, emoji: "🍎", quantityAvailable: 45 },
  { name: "Orange", price: 10, emoji: "🍊", quantityAvailable: 0 },
  { name: "Pine Apple", price: 20, emoji: "🍍", quantityAvailable: 0 },
  { name: "Mango", price: 8, emoji: "🥭", quantityAvailable: 2 },
  { name: "Avocado", price: 3, emoji: "🥑", quantityAvailable: 54 },
  { name: "Watermelon", price: 30, emoji: "🍉", quantityAvailable: 23 },
];

function App() {
  const [showAvailable, setShowAvailable] = useState(false);
  const [availableFruits, setAvailableFruits] = useState([]);
  const [showCostly, setShowCostly] = useState(false);
  const [costlyFruits, setCostlyFruits] = useState([]);
  const [showInexpensive, setShowInexpensive] = useState(false);
  const [inexpensiveFruits, setInexpensiveFruits] = useState([]);

  const filterAvailableFruits = () => {
    const available = fruitList.filter((fruit) => fruit.quantityAvailable > 0);
    setAvailableFruits(available);
    setShowAvailable(true);
    setShowCostly(false);
    setShowInexpensive(false);
  };

  const filterCostlyFruits = () => {
    const costly = fruitList.filter((fruit) => fruit.price > 15);
    setCostlyFruits(costly);
    setShowAvailable(false);
    setShowCostly(true);
    setShowInexpensive(false);
  };

  const filterInexpensiveFruits = () => {
    const inexpensive = fruitList.filter((fruit) => fruit.price <= 15);
    setInexpensiveFruits(inexpensive);
    setShowAvailable(false);
    setShowCostly(false);
    setShowInexpensive(true);
  };

  return (
    <>
      <h1>Welcome to Fruit Shop</h1>
      {showAvailable ? (
        <>
          <h3>Available Fruits:</h3>
          <ul>
            {availableFruits.map((fruit) => (
              <Fruitdisplay key={fruit.name} Fruit={fruit}></Fruitdisplay>
            ))}
          </ul>
        </>
      ) : showCostly ? (
        <>
          <h3>Costly Fruits:</h3>
          <ul>
            {costlyFruits.map((fruit) => (
              <Fruitdisplay key={fruit.name} Fruit={fruit}></Fruitdisplay>
            ))}
          </ul>
        </>
      ) : showInexpensive ? (
        <>
          <h3>Inexpensive Fruits:</h3>
          <ul>
            {inexpensiveFruits.map((fruit) => (
              <Fruitdisplay key={fruit.name} Fruit={fruit}></Fruitdisplay>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h3>Overall Inventory: </h3>
          <ul>
            {fruitList.map((fruit) => (
              <Fruitdisplay key={fruit.name} Fruit={fruit}></Fruitdisplay>
            ))}
          </ul>
        </>
      )}
      <button onClick={filterAvailableFruits}>Show Available Fruits</button>{" "}
      <button onClick={filterCostlyFruits}>List Costly Fruits</button>{" "}
      <button onClick={filterInexpensiveFruits}>List Inexpensive Fruits</button>
    </>
  );
}

export default App;
