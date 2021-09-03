import "./App.css";
import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClickInSync = () => {
    setClickCount((prev) => prev + 1);
    setClickCount((prev) => prev + 1);
  };

  const handleClickInAsync = () => {
    setTimeout(() => {
      setClickCount((prev) => prev + 1);
      setClickCount((prev) => prev + 1);
    }, 300);
  };

  return (
    <div className="App">
      Hello, world
      <br />
      <br />
      <button>HandleClickSync</button>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <button>HandleClickAsync</button>
    </div>
  );
}

export default App;
