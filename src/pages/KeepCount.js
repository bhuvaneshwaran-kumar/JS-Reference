import React from "react";
import { useCounter } from "../context/UserProvider";

function KeepCount() {
  const [count, setCount] = useCounter();

  const incrementCount = () => setCount((prev) => prev + 1);
  const decrementCount = () => setCount((prev) => prev - 1);
  return (
    <center>
      <div>welCome to Counter component</div>
      <p>{count}</p>
      <button onClick={incrementCount}> + </button> &nbsp;
      <button onClick={decrementCount}> - </button>
    </center>
  );
}

export default KeepCount;
