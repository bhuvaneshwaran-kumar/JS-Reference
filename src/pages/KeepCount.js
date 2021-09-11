import React, { useEffect, useRef, useState } from "react";
import { useCounter } from "../context/UserProvider";

function KeepCount() {
  const [count, dispatch] = useCounter();
  const timer = useRef();
  const isthrottle = useRef(true);

  const [localState, setLocalState] = useState(1);

  const incrementCount = () => {
    console.log("haha");
    dispatch({
      type: "INCREMENT",
    });
  };
  const decrementCount = () => {
    console.log("decrementCount");
    dispatch({
      type: "DECREMENT",
    });
  };

  useEffect(() => {
    console.log(`localState is changed it's value ${localState}`);
  }, [localState]);

  const debounce = (func) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      func();
    }, 100);
    console.log(timer.current);
  };

  const throttle = (func) => {
    if (isthrottle.current) {
      isthrottle.current = false;
      setTimeout(() => {
        func();
        isthrottle.current = true;
      }, 1000);
    }
  };

  return (
    <center>
      <div>welCome to Counter component</div>
      <p>{count}</p>
      <button onClick={() => debounce(incrementCount)}> + </button> &nbsp;
      <button onClick={() => throttle(decrementCount)}> - </button> &nbsp;
      <button onClick={() => setLocalState(2)}>Click</button>
    </center>
  );
}

export default KeepCount;
