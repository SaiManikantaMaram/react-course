import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";

function App() {
  const [counter, setCounter] = useState(15);

  const sum = () => setCounter(counter + 1);
  const subraction = () => setCounter(counter - 1);

  const person = {
    name: "mani",
    message: "Hi There!",
    seatNumber: [1, 4, 7],
  };

  return (
    <>
      <Hello person={person}></Hello>
      <Fruits fruitList={["Mango", "Apple", "Grapes"]}></Fruits>
      <h1>Welcome to React {counter}</h1>
      <h4>Counter value: {counter}</h4>
      <button onClick={sum}>Add Value</button>
      {"   "}
      <button onClick={subraction}>Remove Value </button>
      <footer>Footer: {counter} </footer>
    </>
  );
}

export default App;
