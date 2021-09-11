import React from "react";
import { useCounter } from "../context/UserProvider";

function KeepCount() {
  const [count, dispatch] = useCounter();

  const incrementCount = () =>
    dispatch({
      type: "INCREMENT",
    }); //setCount((prev) => prev + 1);
  const decrementCount = () =>
    dispatch({
      type: "DECREMENT",
    }); //setCount((prev) => prev - 1);
  // console.log(count, dispatch);
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
