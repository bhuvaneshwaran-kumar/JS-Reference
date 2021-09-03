import "./App.css";
import { useState, startTransition, useEffect } from "react";
// import { flushSync } from "react-dom";

function App() {
  const [, setClickCount] = useState(0);

  //1. Automatic batching - START

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

  // alert(`Click Count ${clickCount}`);

  // Automatic batching - END

  //2. The startTransition API for non-urgent state updates

  const FRIENDS_LIST = [
    "mani",
    "vasanth",
    "mridul",
    "govind",
    "siddharth",
    "monika",
    "ragha",
    "sneka",
    "ragha",
    "nithya",
  ];

  const [searchValue, setSearchValue] = useState("");
  const [suggestSearch, setSuggestSearch] = useState(FRIENDS_LIST);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchValue(value); //Urgent Update.

    startTransition(() => {
      //Not-Urgent Update.
      setSuggestSearch(() => {
        let i = 0;
        while (i < 100000000) {
          i++;
        }
        return FRIENDS_LIST.filter(
          (data) => data.startsWith(value.toLowerCase()) && data
        );
      });
    });
  };

  useEffect(() => {
    console.log(suggestSearch);
  }, [suggestSearch]);
  useEffect(() => {
    console.log("value Onchange");
  }, [searchValue]);

  return (
    <div className="App">
      Hello, world
      <br />
      <br />
      <button onClick={handleClickInSync}>HandleClickSync</button>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <button onClick={handleClickInAsync}>HandleClickAsync</button>
      <hr />
      <input
        list="friends"
        type="text"
        value={searchValue}
        onChange={handleOnChange}
      />
      <ul>
        {suggestSearch.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
