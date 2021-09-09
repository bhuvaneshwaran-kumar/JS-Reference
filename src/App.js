import { useRef, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
function App() {
  const [timeInSeconds, setTimeInSeconds] = useState(100);
  const timer = useRef();
  const startTimer = () => {
    timer.current = setInterval(() => {
      setTimeInSeconds((prev) => prev - 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timer.current);
  };
  return (
    <div className="App">
      <center>
        <p>{timeInSeconds}</p>
        <br />
        <button onClick={startTimer}>StatTimer</button> &nbsp;
        <button onClick={stopTimer}>StopTimer</button>
        <p>
          <Link to="/about">About</Link>
        </p>
      </center>
      HelloWorld !.
      <Switch>
        <Route to="/" exact>
          <center>HomePage</center>
        </Route>
        <Route to="/about" exact>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
