# Event Propagation.

- event propagation is the blanket term for both Bubbling and capturing.

# Bubblling.

- When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

# Capturing.

- when an event happens on an element, it first runs the handler on the top ancestor element. then all the way down to the descendant upto the target element.

### You can stop the propagation by using **e.stopPropagation()** method.

---

# event Delegation.

- When you want to perform onClick event listener for all the li you choose

```javascript
let lis = document.querySelectorAll("li");

lis.forEach((li) => {
  li.addEventListener("click", cb, { capture: false });
});
```

### **Now comes the situation** after this forEach you decided to add onemore li to the document, Now you again need to add a listener to it.

**To resolve this :**

```javascript
let listIeamEventListener = (e) => {
  // this delegate listner is going to handle for all the list iteam in ul
  if (e.target.matches("li")) {
    // matches('css selector 😀😀')
    console.log(`you're clicking ${e.target.innerText}`);
  }
};

ul.addEventListener("click", listIeamEventListener, { capture: false });
```
