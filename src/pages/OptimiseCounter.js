import React, { useState, useMemo } from "react";

function OptimiseCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const updateCounter1 = () => setCount1((prev) => prev + 1);
  const updateCounter2 = () => setCount2((prev) => prev + 1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 === 0 ? true : false;
  }, [count1]);

  return (
    <div>
      <center>
        <div>welcome to Optimize Counter component</div>
        <button onClick={updateCounter1}> + count-one </button> &nbsp;{" "}
        <span>{count1} is</span> <span>{isEven ? "even" : "Odd"}</span>
        <br />
        <button onClick={updateCounter2}> + count2 </button> &nbsp;{" "}
        <span>{count2}</span>
      </center>
    </div>
  );
}

export default OptimiseCounter;
