# Hooks.

## What and why react hooks.

with hooks you can manage state in func components.

- lot of code is optimized .

# useState :

useState() is a hook that lets you add react state to functional component.

---

# useRef :

    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

---

# useContext:

    context provides a way to pass data through the component tree without having to pass props down manually at every leve.
     create a context.
     provide the context
     consume it

# Lifting State Up.

    we can also able to pass methods that actually manupulate the state as a prop.
    now if the state got updated by child component the changes will be synchronized in all the components which uses the state.

---

# Keys.

    Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

probllem using index as a key.

```JS
                               <li key={1}>Star</li>
    <li key={1}>One</li>    || <li key={2}>One</li>
    <li key={2}>Two</li>    || <li key={3}>Two</li>
    <li key={3}>Three</li>  || <li key={4}>Three</li>
    <li key={4}>Four</li>   || <li key={5}>Four</li>
    // As component instances are updated and reused based on their key, if the key is an index, moving an item changes it. As a result, the component will be updated in unexpected ways.

```

---

# React Lifecycle.

    Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

    The three phases are: Mounting, Updating, and Unmounting.

# Fragments

<></>

---

SwagerApi Doc.
