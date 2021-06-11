# TOPICS TO BE COVERED.

1. Event Loop.
1. Callback Queue.
1. Microtask Queue.
1. Starvation of Callback Queue.

**When callStack encounters the asynchronous web api callBack it register the callBack in webapi environment**

---

```
    so when the event occurs or the setTimeout expires or the promise is returned then the respective callBacks will be sent to the respective Queue's.
```

> So now we need to send the callBacks through the respective Queue's to the callStack.

<br/>

### **1. Event Loop**

- The only job of the EventLoop is to continuously monitor if the callStack is empty.
- if it's empty then it will check if there is any callback waiting in microtask Queue to be executed.
- if there isn't any callback then it will check if there is any callback waiting in callBack Queue to be executed.

```C++
    if ( callStack.length == 0 ){

        // First priority will be given to microtask Queue.
        while ( microtaskQueue.length != 0 ){

            // runs Until there is no callBack in microtaskQueue
            callStack.push( microtaskQueue.prepend() )

        }

        //Then comes to the callBack Queue or Task Queue.
         while ( callBackQueue.length != 0 ){

            // runs Until there is no callBack in callBackQueue
            callStack.push( callBackQueue.prepend() )

        }
    }
```

---

### **2. CallBack Queue :**

- All the callBack from the setTimeout or eventListener will go inside the callBack Queue

---

### **3. Microtask Queue :**

- All the callBack from the promises or mutationObserver will go inside the microtask Queue
- It has the high priority compare to callback queue.
- _mutationObserver_ - it keep on checks whether is there any change in DOM element , if there is change then it will execute some callBack.

### **4. Starvation In CallBack Queue :**

- <pre>
      if the callBack in the microtask queue creats another callBack in microtask and the new one create another one and so on.
      then the callBack in the callback will never get pushed into the callstack.
      This situation is know as Starvation in callBAck queue.
  </pre>
