# Debouncing in JS

- Debouncing in JS is a practice used to improve browser performance
- There might be a functionality in webpage which requires time consumiung computation. If such kind of method involked frquently,it might greatly affect performance of the browser. since **JS is a Single threaded and synchronous** programming language
- So debouncing is the practice used to ensure that time-consuming task do not fires often.
- Basically it limits the rate of execution.

```javascript
function fetchFromApi() {
  console.log(input.value);
}

const debouncing = (fetchFromApi, delay) => {
  let timer; // closure a function along with it's lexical environment.
  return function () {
    clearTimeout(timer); // clearing it from the webApi environment.
    timer = setTimeout(() => {
      fetchFromApi(); // only fires when user give 400ms delay while inputing the element.
    }, delay);
  };
};

input.addEventListener("keydown", debouncing(fetchFromApi, 400));
```

<p align='center'>🚀🚀🚀🚀🚀🚀🚀</p>
