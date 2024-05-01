import { useState } from "react";

function App() {
  const [countValue, setCountValue] = useState(0);
  const [incrementby, setIncrementBy] = useState(1);

  function increment() {
    setCountValue(countValue + incrementby);
  }
  function decrement() {
    setCountValue(countValue - 1);
  }
  const increaseIncrement = () => {
    setIncrementBy(incrementby + 1);
  };
  const decreaseIncrement = () => {
    setIncrementBy(incrementby - 1);
  };

  return (
    <>
      <h1>Count Value is {countValue}</h1>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <h1>We are incrementing the value by:{incrementby}</h1>
      <button onClick={increaseIncrement}>Increase increment</button>{" "}
      <button onClick={decreaseIncrement}>Decrease increment</button>
    </>
  );
}

export default App;
