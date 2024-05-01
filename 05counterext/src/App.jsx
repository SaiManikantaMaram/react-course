import { useState } from "react";

function App() {
  const [countValue, setCountValue] = useState(0);
  const [stepby, setStepBy] = useState(1);

  function increment() {
    setCountValue(countValue + stepby);
  }
  function decrement() {
    setCountValue(countValue - stepby);
  }
  const setStepValue = (e) => {
    setStepBy(parseInt(e.target.value));
  };

  return (
    <>
      <h1>Count Value is {countValue}</h1>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
      <h1>Step Size is:{stepby}</h1>{" "}
      <input type="text" onChange={(e) => setStepValue(e)} />
    </>
  );
}

export default App;
