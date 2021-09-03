# React 18 Alpha

## How to install

**npm install react@alpha react-dom@alpha --force**

You can use the --force flag so that you can update both react and react-dom libraries:

---

### The notable features you can already try in React 18 are as follows:

- The new ReactDOM.createRoot() API replacing ReactDOM.render()
- Batching improvements for fewer renders
- SSR support for <Suspense> component
- startTransition API for non-urgent state updates

---

## ReactDOM.createRoot() API explained

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

## Automatic batching improvements for rendering

**Batching** is mechanism used by React to group multiple state updates into one re-render. With batching, you will avoid unnecessary renders and optimize the rendering process

However, the batching mechanism implemented in React 17 was not consistent. The batching won’t happen when you call the state update methods from a callback.

**React 18** solved the problem above by improving the batching mechanism.
