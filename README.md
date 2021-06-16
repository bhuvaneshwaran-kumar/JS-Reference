# Throttling.

- Throttling in JS is a practice used to enhance the browser optimization.

- it make sure that not to fire time consuming computations function so ofter.

- it basically limits the rate of execution of the function call.

---

```javascript
let button = document.querySelector("#button");
let number = 0;

let heavyTaskButtonOperation = () => {
  console.log("performing some time consuming computation.", number++);
};

let throttingButton = (heavyTaskButtonOperation, delay) => {
  let prev = 0;
  return () => {
    let now = Date.now();

    console.log(`clicking the button.`);

    if (now - prev > delay) {
      prev = Date.now();
      heavyTaskButtonOperation();
    }
  };
};

button.addEventListener(
  "click",
  throttingButton(heavyTaskButtonOperation, 1000)
);
```

---

# Difference.

- Debouncing ensures that a function is called after event has stopped occurring.

- Throttling ensures that a function is called once in every n-time-interval.

-
