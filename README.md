# call(), apply() and bind()

- ### call() and apply() :

Basically it allows us to borrow a function for similar objects.

this keyword in function represent the object which calls the function.

> by using this call() and apply() you can specify what the 'this' keyword should be by passing object as a parameter.

### Difference

| call()                          | Apply()                    |
| ------------------------------- | -------------------------- |
| call( reference,value1,value2 ) | apply( reference,[array] ) |

---

- ### bind()
  it basically binds the function and the reference and return the function in binded formtat.
