# React 18 Alpha

## How to install

**npm install react@alpha react-dom@alpha --force**

You can use the --force flag so that you can update both react and react-dom libraries:

---

### The notable features you can already try in React 18 are as follows:

- The new ReactDOM.createRoot() API replacing ReactDOM.render()
- Batching improvements for fewer renders
- SSR support for `<Suspense> `component
- startTransition API for non-urgent state updates

---

## 1. ReactDOM.createRoot() API explained

The ReactDOM.createRoot() method replaces the ReactDOM.render()

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const container = document.getElementById("root");
// Create a root.
const root = ReactDOM.createRoot(container);
// Render the top component to the root.
root.render(<App />);
```

> Note : You can try React 18 features only after you use the createRoot() method.

---

## 2. Automatic batching improvements for rendering

**Batching** is mechanism used by React to group multiple state updates into one re-render. With batching, you will avoid unnecessary renders and optimize the rendering process

However, the batching mechanism implemented in React 17 was not consistent. The batching won’t happen when you call the state update methods from a callback.

**React 18** solved the problem above by improving the batching mechanism.

---

## 3.The startTransition API for non-urgent state updates

The startTransition API is a new feature in React 18 designed to help your application stay responsive during state update that requires heavy computation power to render the UI.

The updates wrapped in startTransition will be interrupted when more important updates are triggered.

```JS
import { startTransition} from "react";

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchValue(value); //Urgent Update.

    startTransition(() => {
      //Not-Urgent Update.
      setSuggestSearch(() => {
        let i = 0;
        while (i < 100000000) {
          i++;    //Take Time to Compute Value
        }
        return FRIENDS_LIST.filter(
          (data) => data.startsWith(value.toLowerCase()) && data
        );
      });
    });
  };
```

---

## 4.SSR support for `<Suspense>`

The `<Suspense> `component is a feature of React library that allows you to wait for some code to load by adding a fallback component to render before the code is loaded.
Here’s an example of `<Suspense> `in action:

```JS
<Suspense fallback={<LoadingSpinner />}>
  <UserProfile />
<Suspense />
```

You can read about `<Suspense> `in depth from React documentation.

In React 18, the `<Suspense> `feature is supported even when you render your components on the server using SSR. This update allows you to wrap server rendered components inside a `<Suspense> `component.

Any server side components wrapped inside `<Suspense> `will be streamed as HTML using the fallback component first, and once the component is ready, React will send new bits of HTML to replace the fallback component.

---

<center>@ Reference : [**Click Here**](https://blog.bitsrc.io/trying-out-react-18-alpha-release-bad9aed12bee)</center>
